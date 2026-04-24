import { describe, expect, it } from "vitest";
import { areas } from "../data/areas";
import { projects } from "../data/projects";
import { projectSeoEntries, serviceSeoEntries } from "../data/seoCatalog";
import { services } from "../data/services";
import { indexableSeoRoutes, seoRoutes } from "./routes";

describe("seo route manifest", () => {
  it("includes the homepage in the full manifest and indexable set", () => {
    expect(seoRoutes.some((route) => route.path === "/")).toBe(true);
    expect(indexableSeoRoutes.some((route) => route.path === "/")).toBe(true);
  });

  it("derives service, area, and project routes from their data sources", () => {
    for (const service of services) {
      expect(indexableSeoRoutes.some((route) => route.path === `/${service.slug}`)).toBe(true);
    }

    for (const area of areas) {
      expect(indexableSeoRoutes.some((route) => route.path === `/${area.slug}`)).toBe(true);
    }

    for (const project of projects) {
      expect(indexableSeoRoutes.some((route) => route.path === `/projects/${project.slug}`)).toBe(true);
    }
  });

  it("keeps the Node-safe SEO catalog aligned with service and project content", () => {
    expect(serviceSeoEntries).toHaveLength(services.length);
    expect(projectSeoEntries).toHaveLength(projects.length);

    for (const service of services) {
      const seoEntry = serviceSeoEntries.find((entry) => entry.slug === service.slug);
      expect(seoEntry).toBeDefined();
      expect(seoEntry?.title).toBe(service.title);
      expect(seoEntry?.metaTitle).toBe(service.metaTitle);
      expect(seoEntry?.metaDescription).toBe(service.metaDescription);
    }

    for (const project of projects) {
      const seoEntry = projectSeoEntries.find((entry) => entry.slug === project.slug);
      expect(seoEntry).toBeDefined();
      expect(seoEntry?.title).toBe(project.title);
      expect(seoEntry?.shortDescription).toBe(project.shortDescription);
      expect(seoEntry?.location).toBe(project.location);
      expect(seoEntry?.tag).toBe(project.tag);
    }
  });

  it("keeps noindex routes out of the indexable export", () => {
    const noindexPaths = seoRoutes
      .filter((route) => route.noindex)
      .map((route) => route.path);

    expect(noindexPaths.length).toBeGreaterThan(0);

    for (const path of noindexPaths) {
      expect(indexableSeoRoutes.some((route) => route.path === path)).toBe(false);
    }
  });

  it("assigns a concrete output html path for every route", () => {
    for (const route of seoRoutes) {
      expect(route.outputPath).toMatch(/(^index\.html$|\/index\.html$)/);
      expect(route.title.trim().length).toBeGreaterThan(0);
      expect(route.description.trim().length).toBeGreaterThan(0);
    }
  });
});
