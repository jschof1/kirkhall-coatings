export type ServiceSeoEntry = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
};

export type ProjectSeoEntry = {
  slug: string;
  title: string;
  shortDescription: string;
  location: string;
  tag: string;
};

// These exports stay asset-free so Node-based SEO scripts can import them directly.
export const serviceSeoEntries: ServiceSeoEntry[] = [
  {
    slug: "external-wall-coatings",
    title: "External Wall Coatings",
    metaTitle: "External Wall Coatings Motherwell & Glasgow | Kirkhall Wall Coatings",
    metaDescription:
      "External wall coating specialists in Motherwell, North Lanarkshire and Glasgow. Full prep, repairs and multi-coat weatherproof systems built to last.",
  },
  {
    slug: "upvc-spraying",
    title: "uPVC Window & Door Spraying",
    metaTitle: "uPVC Window Spraying Motherwell & Glasgow | Kirkhall Wall Coatings",
    metaDescription:
      "uPVC window and door spraying in Motherwell, North Lanarkshire and Glasgow. HVLP prep, professional masking, fascias and garage doors. Factory-style finish without full replacement.",
  },
  {
    slug: "wall-repairs-sealing-prep",
    title: "Wall Repairs, Sealing & Prep",
    metaTitle: "Wall Repairs and Sealing Prep Motherwell | Kirkhall Wall Coatings",
    metaDescription:
      "Loose render repairs, crack treatment, biocide wash and stabilising sealer prep for external walls across Motherwell, North Lanarkshire and Glasgow.",
  },
  {
    slug: "upvc-door-spraying",
    title: "uPVC Door Spraying",
    metaTitle: "uPVC Door Spraying Motherwell | Kirkhall Wall Coatings",
    metaDescription:
      "Specialist uPVC front and back door spraying using HVLP application for durable, modern colour changes across North Lanarkshire and Glasgow.",
  },
  {
    slug: "upvc-fascia-soffit-conservatory-spraying",
    title: "uPVC Fascia, Soffit & Conservatory Spraying",
    metaTitle: "uPVC Fascia and Conservatory Spraying Glasgow | Kirkhall Wall Coatings",
    metaDescription:
      "Refurbishment spraying for uPVC fascias, soffits and conservatory frames across Motherwell, North Lanarkshire and Glasgow.",
  },
];

export const projectSeoEntries: ProjectSeoEntry[] = [
  {
    slug: "external-wall-coating-motherwell",
    title: "External Wall Coating Refurbishment",
    shortDescription:
      "Full external wall coating refurbishment with crack repair, prep, sealing and multi-coat masonry finish.",
    location: "Motherwell",
    tag: "External Wall Coatings",
  },
  {
    slug: "upvc-window-respray-airdrie",
    title: "uPVC Window and Door Respray",
    shortDescription:
      "Front elevation uPVC windows and doors colour-changed with HVLP prep, masking, and a durable spray finish.",
    location: "Airdrie",
    tag: "uPVC Spraying",
  },
  {
    slug: "upvc-spraying-glasgow",
    title: "uPVC Window and Door Spraying",
    shortDescription:
      "Colour transformation of windows and doors with HVLP spray application for a factory-style finish.",
    location: "Glasgow",
    tag: "uPVC Spraying",
  },
  {
    slug: "combined-refurbishment-coatbridge",
    title: "External Walls and uPVC Refresh",
    shortDescription:
      "Coordinated external wall coating and uPVC window and trim spraying for a matched, weather-ready exterior.",
    location: "Coatbridge",
    tag: "Wall and uPVC Refurbishment",
  },
  {
    slug: "commercial-office-refresh",
    title: "uPVC and Exterior Trim Refresh",
    shortDescription:
      "HVLP uPVC spraying and external trim refurbishment to modernise a residential frontage.",
    location: "Wishaw",
    tag: "uPVC and Trim Refurbishment",
  },
];
