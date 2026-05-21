import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { siteConfig } from "../src/data/siteConfig";

const ROOT = process.cwd();

/** Parse `docs/webhooks.md` table rows: `siteConfig.webhooks.<key>` → URL */
function parseWebhookUrlsFromDoc(markdown: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const line of markdown.split("\n")) {
    if (!line.includes("siteConfig.webhooks.") || !line.includes("https://")) continue;
    const cells = line.split("|").map((c) => c.trim());
    const keyCell = cells.find((c) => c.includes("siteConfig.webhooks."));
    const urlCell = cells.find((c) => c.startsWith("https://"));
    if (!keyCell || !urlCell) continue;
    const m = keyCell.match(/webhooks\.(\w+)/);
    if (m) out[m[1]] = urlCell;
  }
  return out;
}
const FILES = [
  "README.md",
  "index.html",
  "public/site.webmanifest",
  "src/data/siteConfig.ts",
  "src/data/services.ts",
  "src/data/areas.ts",
  "src/data/seoCatalog.ts",
  "src/seo/routes.ts",
  "src/components/SEO.tsx",
];

const FORBIDDEN = [
  [String.fromCharCode(76, 111, 110, 100, 111, 110), "Dec"].join(" "),
  [
    String.fromCharCode(76, 111, 110, 100, 111, 110),
    "&",
    String.fromCharCode(75, 101, 110, 116),
  ].join(" "),
  String.fromCharCode(75, 101, 110, 116),
  "Wallpaper" + "ing",
  ["Gas", "Safe"].join(" "),
  "BE" + "SA",
];

describe("content integrity", () => {
  it("removes legacy brand/geography/service tokens", () => {
    const corpus = FILES.map((path) => readFileSync(join(ROOT, path), "utf8")).join("\n");

    for (const token of FORBIDDEN) {
      expect(corpus).not.toContain(token);
    }
  });

  it("uses canonical brand naming", () => {
    const siteConfig = readFileSync(join(ROOT, "src/data/siteConfig.ts"), "utf8");
    expect(siteConfig).toContain("Kirkhall Wall Coatings");
  });

  it("uses kirkhall target locations", () => {
    const areasFile = readFileSync(join(ROOT, "src/data/areas.ts"), "utf8");
    expect(areasFile).toContain('name: "Motherwell"');
    expect(areasFile).toContain('name: "Glasgow"');
    expect(areasFile).toContain('name: "Cumbernauld"');
  });

  it("site config webhooks match docs/webhooks.md", () => {
    const doc = readFileSync(join(ROOT, "docs/webhooks.md"), "utf8");
    const fromDoc = parseWebhookUrlsFromDoc(doc);
    const keys = Object.keys(fromDoc).sort();
    expect(keys.length).toBeGreaterThan(0);
    expect(Object.keys(siteConfig.webhooks).sort()).toEqual(keys);
    for (const key of keys) {
      const url = fromDoc[key];
      expect(siteConfig.webhooks[key as keyof typeof siteConfig.webhooks]).toBe(url);
    }
  });

  it("uses valid production favicon and social image paths", () => {
    const indexHtml = readFileSync(join(ROOT, "index.html"), "utf8");
    const manifest = readFileSync(join(ROOT, "public/site.webmanifest"), "utf8");
    const seoComponent = readFileSync(join(ROOT, "src/components/SEO.tsx"), "utf8");
    const siteConfigFile = readFileSync(join(ROOT, "src/data/siteConfig.ts"), "utf8");

    expect(indexHtml).toContain('href="/favicon.ico"');
    expect(indexHtml).toContain('href="/favicon.svg"');
    expect(indexHtml).toContain('href="/apple-touch-icon.png"');
    expect(manifest).toContain("/web-app-manifest-192x192.png");
    expect(manifest).toContain("/web-app-manifest-512x512.png");
    expect(siteConfigFile).toContain('ogImage: "/og-image.jpg"');
    expect(seoComponent).toContain('"addressCountry": "GB"');
    expect(seoComponent).toContain('"serviceType"');
  });
});
