import type { PageMetaMapEntry } from "vite-plugin-react-meta-map";
import { seoRoutes, toAbsoluteUrl } from "./seo/routes";

const OG_IMAGE_PATH = "/og-image.jpg";

export const pageMetaMap: Record<string, PageMetaMapEntry> = Object.fromEntries(
  seoRoutes.map((route) => [
    route.path,
    {
      title: route.title,
      description: route.description,
      ogImage: `${toAbsoluteUrl("/")}${OG_IMAGE_PATH.replace(/^\//, "")}`,
      ...(route.noindex ? { noindex: true } : {}),
    },
  ]),
);

export default pageMetaMap;
