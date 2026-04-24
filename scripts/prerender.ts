import { createServer } from "node:http";
import { existsSync } from "node:fs";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import type { AddressInfo } from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer, { type Page } from "puppeteer";
import { seoRoutes, toAbsoluteUrl } from "../src/seo/routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const host = "127.0.0.1";

const mimeTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

const chromeCandidates = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
].filter(Boolean) as string[];

const resolveExecutablePath = () =>
  chromeCandidates.find((candidate) => existsSync(candidate));

const shouldFallbackToIndex = async (requestPath: string) => {
  if (path.extname(requestPath)) {
    return false;
  }

  const candidate = path.join(distDir, requestPath.replace(/^\/+/, ""));

  try {
    const candidateStat = await stat(candidate);
    return !candidateStat.isFile();
  } catch {
    return true;
  }
};

const createPreviewServer = () =>
  createServer(async (request, response) => {
    const requestUrl = new URL(request.url ?? "/", `http://${host}`);
    const decodedPath = decodeURIComponent(requestUrl.pathname);
    const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
    const relativePath =
      normalizedPath === "/"
        ? "index.html"
        : normalizedPath.replace(/^\/+/, "");

    const fallbackToIndex = await shouldFallbackToIndex(decodedPath);
    const filePath = fallbackToIndex
      ? path.join(distDir, "index.html")
      : path.join(distDir, relativePath);

    if (!filePath.startsWith(distDir)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    try {
      const fileBuffer = await readFile(filePath);
      const extension = path.extname(filePath).toLowerCase();
      response.writeHead(200, {
        "Content-Type": mimeTypes[extension] ?? "application/octet-stream",
      });
      response.end(fileBuffer);
    } catch {
      response.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end("Not found");
    }
  });

const waitForServer = (server: ReturnType<typeof createPreviewServer>) =>
  new Promise<string>((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, host, () => {
      const address = server.address() as AddressInfo;
      resolve(`http://${host}:${address.port}`);
    });
  });

const waitForSeo = async (
  page: Page,
  routePath: string,
  title: string,
  description: string,
) => {
  const canonicalUrl = toAbsoluteUrl(routePath);

  try {
    await page.waitForFunction(
      ({ expectedTitle, expectedDescription, expectedCanonical }) => {
        const descriptionTag = document.querySelector('meta[name="description"]');
        const canonicalTag = document.querySelector('link[rel="canonical"]');

        return (
          document.title === expectedTitle &&
          descriptionTag?.getAttribute("content") === expectedDescription &&
          canonicalTag?.getAttribute("href") === expectedCanonical
        );
      },
      {
        timeout: 15_000,
      },
      {
        expectedTitle: title,
        expectedDescription: description,
        expectedCanonical: canonicalUrl,
      },
    );
  } catch (error) {
    const actualSeo = await page.evaluate(() => ({
      title: document.title,
      description:
        document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
      canonical:
        document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "",
    }));

    throw new Error(
      [
        `SEO metadata did not settle for ${routePath}`,
        `Expected title: ${title}`,
        `Actual title: ${actualSeo.title}`,
        `Expected description: ${description}`,
        `Actual description: ${actualSeo.description}`,
        `Expected canonical: ${canonicalUrl}`,
        `Actual canonical: ${actualSeo.canonical}`,
        `Original error: ${error instanceof Error ? error.message : String(error)}`,
      ].join("\n"),
    );
  }
};

const browser = await puppeteer.launch({
  executablePath: resolveExecutablePath(),
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const server = createPreviewServer();

try {
  const previewBaseUrl = await waitForServer(server);

  for (const route of seoRoutes) {
    const page = await browser.newPage();

    try {
      console.log(`Rendering ${route.path}`);
      await page.goto(`${previewBaseUrl}${route.path}`, {
        waitUntil: "domcontentloaded",
        timeout: 30_000,
      });

      await waitForSeo(page, route.path, route.title, route.description);

      const html = await page.content();
      const outputFile = path.join(distDir, route.outputPath);
      await mkdir(path.dirname(outputFile), { recursive: true });
      await writeFile(outputFile, `<!DOCTYPE html>\n${html}`, "utf8");

      console.log(`Prerendered ${route.path} -> ${route.outputPath}`);
    } finally {
      await page.close();
    }
  }
} finally {
  server.close();
  await browser.close();
}

console.log(`Prerendered ${seoRoutes.length} SEO routes`);
