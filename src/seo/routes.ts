import { areas } from "../data/areas";
import { projectSeoEntries, serviceSeoEntries } from "../data/seoCatalog";
import { siteConfig } from "../data/siteConfig";

export type SeoRoute = {
  path: string;
  outputPath: string;
  title: string;
  description: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  noindex?: boolean;
  source?: string;
};

const siteUrl = siteConfig.seo.siteUrl.replace(/\/$/, "");

export const toAbsoluteUrl = (path: string) =>
  path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;

export const toOutputPath = (path: string) => {
  if (path === "/") {
    return "index.html";
  }

  return `${path.replace(/^\/+/, "")}/index.html`;
};

const staticSeoRoutes: SeoRoute[] = [
  {
    path: "/",
    outputPath: toOutputPath("/"),
    title: "Kirkhall Wall Coatings | External Wall & uPVC Window Specialists",
    description:
      "External wall coatings and uPVC window and door spraying across Motherwell, North Lanarkshire, and Glasgow. Free surveys and detailed quotes.",
    changefreq: "weekly",
    priority: 1,
    source: "static",
  },
  {
    path: "/about",
    outputPath: toOutputPath("/about"),
    title: "About Kirkhall Wall Coatings | External Coatings Specialists",
    description:
      "Learn about Kirkhall Wall Coatings and our prep-first approach to external wall coatings and uPVC window and door spraying across North Lanarkshire and Glasgow.",
    changefreq: "monthly",
    priority: 0.7,
    source: "static",
  },
  {
    path: "/portfolio",
    outputPath: toOutputPath("/portfolio"),
    title: "Our Portfolio | Kirkhall Wall Coatings",
    description:
      "Explore external wall coatings and uPVC window and door spraying projects across Motherwell, North Lanarkshire, and Glasgow.",
    changefreq: "weekly",
    priority: 0.8,
    source: "static",
  },
  {
    path: "/services",
    outputPath: toOutputPath("/services"),
    title: "Services | Kirkhall Wall Coatings",
    description:
      "External wall coatings and uPVC window and door spraying across Motherwell, North Lanarkshire, and Glasgow.",
    changefreq: "weekly",
    priority: 0.9,
    source: "static",
  },
  {
    path: "/faq",
    outputPath: toOutputPath("/faq"),
    title: "Frequently Asked Questions | Kirkhall Wall Coatings",
    description:
      "Find answers to common questions about external wall coatings and uPVC window and door spraying across Motherwell, North Lanarkshire, and Glasgow.",
    changefreq: "monthly",
    priority: 0.7,
    source: "static",
  },
  {
    path: "/locations",
    outputPath: toOutputPath("/locations"),
    title: `Service Areas | ${siteConfig.business.name}`,
    description:
      "Kirkhall Wall Coatings provides external wall coatings and uPVC window and door spraying across Motherwell, North Lanarkshire, and Glasgow.",
    changefreq: "weekly",
    priority: 0.8,
    source: "static",
  },
  {
    path: "/get-quote",
    outputPath: toOutputPath("/get-quote"),
    title: `Get a Free Quote ${siteConfig.seo.titleSuffix}`,
    description:
      "Get a free, no-obligation quote for external wall coatings and uPVC window and door spraying. Fast response across Motherwell, North Lanarkshire, and Glasgow.",
    changefreq: "weekly",
    priority: 0.8,
    source: "static",
  },
  {
    path: "/reviews",
    outputPath: toOutputPath("/reviews"),
    title: `Customer Reviews & Testimonials | ${siteConfig.business.name}`,
    description:
      "Read real reviews from customers across Motherwell, North Lanarkshire, and Glasgow for external wall coatings and uPVC window and door spraying.",
    changefreq: "weekly",
    priority: 0.7,
    source: "static",
  },
  {
    path: "/sitemap",
    outputPath: toOutputPath("/sitemap"),
    title: `Sitemap | ${siteConfig.business.name}`,
    description: `Complete sitemap for ${siteConfig.business.name}. Find all our wall coating and uPVC window spraying services, service areas, and important pages.`,
    changefreq: "monthly",
    priority: 0.3,
    source: "static",
  },
  {
    path: "/feedback",
    outputPath: toOutputPath("/feedback"),
    title: `Feedback ${siteConfig.seo.titleSuffix}`,
    description: siteConfig.seo.defaultDescription,
    changefreq: "yearly",
    priority: 0.2,
    noindex: true,
    source: "static",
  },
  {
    path: "/discount",
    outputPath: toOutputPath("/discount"),
    title: `Exclusive Discount ${siteConfig.seo.titleSuffix}`,
    description: siteConfig.seo.defaultDescription,
    changefreq: "weekly",
    priority: 0.2,
    noindex: true,
    source: "static",
  },
  {
    path: "/privacy-policy",
    outputPath: toOutputPath("/privacy-policy"),
    title: `Privacy Policy ${siteConfig.seo.titleSuffix}`,
    description:
      `Privacy Policy for ${siteConfig.business.name}. Learn how we collect, use, and protect your personal information.`,
    changefreq: "yearly",
    priority: 0.1,
    noindex: true,
    source: "static",
  },
  {
    path: "/terms-of-service",
    outputPath: toOutputPath("/terms-of-service"),
    title: `Terms of Service ${siteConfig.seo.titleSuffix}`,
    description:
      `Terms of Service for ${siteConfig.business.name}. Read our terms and conditions for wall coating and property refurbishment services.`,
    changefreq: "yearly",
    priority: 0.1,
    noindex: true,
    source: "static",
  },
  {
    path: "/add-customer",
    outputPath: toOutputPath("/add-customer"),
    title: `Add Customer ${siteConfig.seo.titleSuffix}`,
    description: siteConfig.seo.defaultDescription,
    changefreq: "yearly",
    priority: 0.1,
    noindex: true,
    source: "static",
  },
  {
    path: "/marketing-form",
    outputPath: toOutputPath("/marketing-form"),
    title: `Customer Added to Pipeline ${siteConfig.seo.titleSuffix}`,
    description: siteConfig.seo.defaultDescription,
    changefreq: "yearly",
    priority: 0.1,
    noindex: true,
    source: "static",
  },
];

const serviceSeoRoutes: SeoRoute[] = serviceSeoEntries.map((service) => ({
  path: `/${service.slug}`,
  outputPath: toOutputPath(`/${service.slug}`),
  title: service.metaTitle,
  description: service.metaDescription,
  changefreq: "monthly",
  priority: 0.9,
  source: "service",
}));

const areaSeoRoutes: SeoRoute[] = areas.map((area) => ({
  path: `/${area.slug}`,
  outputPath: toOutputPath(`/${area.slug}`),
  title:
    area.metaTitle ||
    `${area.name} Property Coatings | Kirkhall Wall Coatings`,
  description:
    area.metaDescription ||
    `External wall coatings and uPVC window and door spraying in ${area.name}. Free local surveys for ${area.postcodes.join(", ")} properties.`,
  changefreq: "monthly",
  priority: 0.7,
  source: "area",
}));

const projectSeoRoutes: SeoRoute[] = projectSeoEntries.map((project) => ({
  path: `/projects/${project.slug}`,
  outputPath: toOutputPath(`/projects/${project.slug}`),
  title: `${project.title} | ${siteConfig.business.name}`,
  description: `${project.shortDescription} View our ${project.tag.toLowerCase()} project in ${project.location}.`,
  changefreq: "monthly",
  priority: 0.6,
  source: "project",
}));

export const seoRoutes: SeoRoute[] = [
  ...staticSeoRoutes,
  ...serviceSeoRoutes,
  ...areaSeoRoutes,
  ...projectSeoRoutes,
];

export const indexableSeoRoutes = seoRoutes.filter((route) => !route.noindex);
export const noindexSeoRoutes = seoRoutes.filter((route) => route.noindex);
