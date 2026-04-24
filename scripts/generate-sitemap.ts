import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { indexableSeoRoutes, toAbsoluteUrl } from "../src/seo/routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "../public");
const outputPath = path.join(publicDir, "sitemap.xml");

const lastmod = new Date().toISOString().split("T")[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableSeoRoutes
  .map(
    (route) => `  <url>
    <loc>${toAbsoluteUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

await mkdir(publicDir, { recursive: true });
await writeFile(outputPath, sitemapContent, "utf8");

console.log(
  `Generated sitemap for ${indexableSeoRoutes.length} indexable routes at ${outputPath}`,
);
