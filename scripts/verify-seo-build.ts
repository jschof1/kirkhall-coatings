import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  indexableSeoRoutes,
  noindexSeoRoutes,
  seoRoutes,
  toAbsoluteUrl,
} from "../src/seo/routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const sitemapPath = path.join(distDir, "sitemap.xml");

const decodeHtml = (value: string) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const extractTitle = (html: string) => {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? decodeHtml(match[1].trim()) : "";
};

const extractMetaDescription = (html: string) => {
  const doubleQuotedDirectMatch = html.match(
    /<meta[^>]*name=["']description["'][^>]*content="([^"]*)"[^>]*>/i,
  );
  if (doubleQuotedDirectMatch) {
    return decodeHtml(doubleQuotedDirectMatch[1]);
  }

  const singleQuotedDirectMatch = html.match(
    /<meta[^>]*name=["']description["'][^>]*content='([^']*)'[^>]*>/i,
  );
  if (singleQuotedDirectMatch) {
    return decodeHtml(singleQuotedDirectMatch[1]);
  }

  const doubleQuotedReversedMatch = html.match(
    /<meta[^>]*content="([^"]*)"[^>]*name=["']description["'][^>]*>/i,
  );
  if (doubleQuotedReversedMatch) {
    return decodeHtml(doubleQuotedReversedMatch[1]);
  }

  const singleQuotedReversedMatch = html.match(
    /<meta[^>]*content='([^']*)'[^>]*name=["']description["'][^>]*>/i,
  );
  return singleQuotedReversedMatch ? decodeHtml(singleQuotedReversedMatch[1]) : "";
};

const extractCanonical = (html: string) => {
  const doubleQuotedDirectMatch = html.match(
    /<link[^>]*rel=["']canonical["'][^>]*href="([^"]*)"[^>]*>/i,
  );
  if (doubleQuotedDirectMatch) {
    return doubleQuotedDirectMatch[1];
  }

  const singleQuotedDirectMatch = html.match(
    /<link[^>]*rel=["']canonical["'][^>]*href='([^']*)'[^>]*>/i,
  );
  if (singleQuotedDirectMatch) {
    return singleQuotedDirectMatch[1];
  }

  const doubleQuotedReversedMatch = html.match(
    /<link[^>]*href="([^"]*)"[^>]*rel=["']canonical["'][^>]*>/i,
  );
  if (doubleQuotedReversedMatch) {
    return doubleQuotedReversedMatch[1];
  }

  const singleQuotedReversedMatch = html.match(
    /<link[^>]*href='([^']*)'[^>]*rel=["']canonical["'][^>]*>/i,
  );
  return singleQuotedReversedMatch ? singleQuotedReversedMatch[1] : "";
};

const extractRobots = (html: string) => {
  const doubleQuotedDirectMatch = html.match(
    /<meta[^>]*name=["']robots["'][^>]*content="([^"]*)"[^>]*>/i,
  );
  if (doubleQuotedDirectMatch) {
    return doubleQuotedDirectMatch[1];
  }

  const singleQuotedDirectMatch = html.match(
    /<meta[^>]*name=["']robots["'][^>]*content='([^']*)'[^>]*>/i,
  );
  if (singleQuotedDirectMatch) {
    return singleQuotedDirectMatch[1];
  }

  const doubleQuotedReversedMatch = html.match(
    /<meta[^>]*content="([^"]*)"[^>]*name=["']robots["'][^>]*>/i,
  );
  if (doubleQuotedReversedMatch) {
    return doubleQuotedReversedMatch[1];
  }

  const singleQuotedReversedMatch = html.match(
    /<meta[^>]*content='([^']*)'[^>]*name=["']robots["'][^>]*>/i,
  );
  return singleQuotedReversedMatch ? singleQuotedReversedMatch[1] : "";
};

const sitemapXml = await readFile(sitemapPath, "utf8");
const sitemapLocations = Array.from(
  sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g),
  (match) => match[1],
);

for (const route of seoRoutes) {
  const outputFile = path.join(distDir, route.outputPath);
  await stat(outputFile);

  const html = await readFile(outputFile, "utf8");
  const title = extractTitle(html);
  const description = extractMetaDescription(html);
  const canonical = extractCanonical(html);
  const expectedCanonical = toAbsoluteUrl(route.path);

  if (title !== route.title) {
    throw new Error(
      `Title mismatch for ${route.path}: expected "${route.title}", got "${title}"`,
    );
  }

  if (description !== route.description) {
    throw new Error(
      `Description mismatch for ${route.path}: expected "${route.description}", got "${description}"`,
    );
  }

  if (canonical !== expectedCanonical) {
    throw new Error(
      `Canonical mismatch for ${route.path}: expected "${expectedCanonical}", got "${canonical}"`,
    );
  }

  if (indexableSeoRoutes.some((indexableRoute) => indexableRoute.path === route.path) &&
      !sitemapLocations.includes(expectedCanonical)) {
    throw new Error(`Missing sitemap entry for ${route.path}`);
  }

  if (noindexSeoRoutes.some((noindexRoute) => noindexRoute.path === route.path)) {
    const robots = extractRobots(html).toLowerCase();
    if (!robots.includes("noindex")) {
      throw new Error(`Missing noindex robots tag for ${route.path}`);
    }
  }

  if (!html.includes('<div id="root"')) {
    throw new Error(`Missing app root in prerendered HTML for ${route.path}`);
  }
}

console.log(`Verified ${seoRoutes.length} prerendered SEO routes`);
console.log("Verified sitemap alignment");
console.log("Verified prerendered HTML output");
