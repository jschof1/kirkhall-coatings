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
    slug: "roof-refurbishment",
    title: "Roof Refurbishment",
    metaTitle: "Roof Refurbishment North Lanarkshire | Kirkhall Wall Coatings",
    metaDescription:
      "Roof refurbishment for tiled and concrete roofs across North Lanarkshire and Glasgow. Safe prep, moss removal, repairs and protective roof coatings.",
  },
  {
    slug: "upvc-spraying",
    title: "uPVC Window & Door Spraying",
    metaTitle: "uPVC Spraying Motherwell & Glasgow | Kirkhall Wall Coatings",
    metaDescription:
      "uPVC spraying specialists for windows, doors, fascias and garage doors in Motherwell and Glasgow. Factory-style spray finish without full replacement cost.",
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
    slug: "townhouse-interior-sevenoaks",
    title: "External Wall Coating Refurbishment",
    shortDescription:
      "Full external wall coating refurbishment with crack repair, prep, sealing and multi-coat masonry finish.",
    location: "Motherwell",
    tag: "External Wall Coatings",
  },
  {
    slug: "period-property-wallpapering",
    title: "Roof Refurbishment and Coating",
    shortDescription:
      "Roof cleaning, targeted repairs and protective coating system to restore appearance and resilience.",
    location: "Airdrie",
    tag: "Roof Refurbishment",
  },
  {
    slug: "exterior-transformation-maidstone",
    title: "uPVC Window and Door Spraying",
    shortDescription:
      "Colour transformation of windows and doors with HVLP spray application for a factory-style finish.",
    location: "Glasgow",
    tag: "uPVC Spraying",
  },
  {
    slug: "woodwork-restoration-bromley",
    title: "External Walls and Roof Upgrade",
    shortDescription:
      "Combined external wall and roof refurbishment package for weather protection and curb appeal.",
    location: "Coatbridge",
    tag: "Wall and Roof Refurbishment",
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
