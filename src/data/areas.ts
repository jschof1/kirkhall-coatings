export interface Area {
  name: string;
  slug: string;
  region: string;
  postcodes: string[];
  responseTime: string;
  description?: string;
  landmarks?: string[];
  metaTitle?: string;
  metaDescription?: string;
  localContext?: string;
  neighborhoods?: string[];
  architecturalStyles?: {
    style: string;
    description: string;
  }[];
  localHistory?: string;
}

export const areas: Area[] = [
  {
    name: "Motherwell",
    slug: "motherwell",
    region: "North Lanarkshire",
    postcodes: ["ML1", "ML2"],
    responseTime: "Same day",
    description:
      "External wall coatings, roof refurbishment, and uPVC spraying for homes and commercial properties across Motherwell. Every project is delivered with full prep, repair-led application, and weather-ready finishes.",
    localContext:
      "Based in Newarthill with rapid response across Motherwell and nearby ML postcodes.",
    metaTitle:
      "External Wall Coatings Motherwell | Kirkhall Wall Coatings",
    metaDescription:
      "Kirkhall Wall Coatings provides wall coating systems, roof refurbishment, and uPVC spraying in Motherwell and ML1-ML2 areas.",
    neighborhoods: ["Newarthill", "Holytown", "Carfin", "Forgewood"],
    landmarks: ["Strathclyde Country Park", "Fir Park", "North Lanarkshire Civic Centre"],
    architecturalStyles: [
      {
        style: "Red Sandstone Villas",
        description:
          "Coating and refurbishment strategies that protect masonry while retaining period kerb appeal."
      },
      {
        style: "Post-War Terraces",
        description:
          "Durable external coating systems that stabilise tired elevations and improve weather resistance."
      }
    ],
    localHistory:
      "Motherwell's mix of industrial-era housing and newer developments requires coatings that perform through wet Scottish winters."
  },
  {
    name: "Glasgow",
    slug: "glasgow",
    region: "Glasgow City",
    postcodes: ["G1", "G2", "G3", "G4", "G31", "G41"],
    responseTime: "Same day",
    description:
      "Specialist coatings for Glasgow tenements, rendered homes, and commercial units. We deliver substrate repairs, anti-fungal prep, and high-build finishes built for urban weather exposure.",
    localContext:
      "Serving Glasgow from our North Lanarkshire base with planned installs across city districts.",
    metaTitle:
      "Wall Coatings Glasgow | Kirkhall Wall Coatings",
    metaDescription:
      "Wall coatings, roof restoration, and uPVC spraying for Glasgow properties with prep-first workmanship and durable finishes.",
    neighborhoods: ["Dennistoun", "Partick", "Shawlands", "Merchant City"],
    landmarks: ["Glasgow Green", "SEC Campus", "Riverside Museum"],
    architecturalStyles: [
      {
        style: "Victorian Tenements",
        description:
          "Breathable, crack-bridging systems tailored to traditional masonry and stone details."
      },
      {
        style: "Rendered Suburban Homes",
        description:
          "Protective coatings designed to reduce staining and prolong facade life in high-rainfall zones."
      }
    ],
  },
  {
    name: "Cumbernauld",
    slug: "cumbernauld",
    region: "North Lanarkshire",
    postcodes: ["G67", "G68"],
    responseTime: "Next day",
    description:
      "High-performance wall and roof coating solutions for Cumbernauld homes and businesses, including full prep and remediation of weathered render.",
    localContext:
      "Regular project coverage across Cumbernauld villages and surrounding business parks.",
    metaTitle:
      "External Wall Coatings Cumbernauld | Kirkhall Wall Coatings",
    metaDescription:
      "External wall coatings, roof refurbishment, and uPVC spraying for Cumbernauld properties in G67 and G68."
  },
  {
    name: "Coatbridge",
    slug: "coatbridge",
    region: "North Lanarkshire",
    postcodes: ["ML5"],
    responseTime: "Next day",
    description:
      "Coatbridge coating projects focused on masonry protection, roofline renewal, and sprayed finish upgrades for uPVC windows and doors.",
    localContext:
      "Local coverage throughout Coatbridge with practical schedules for occupied homes.",
    metaTitle:
      "Property Coatings Coatbridge | Kirkhall Wall Coatings",
    metaDescription:
      "Kirkhall Wall Coatings delivers external wall coating, roof refurbishment, and uPVC spraying in Coatbridge."
  },
  {
    name: "Airdrie",
    slug: "airdrie",
    region: "North Lanarkshire",
    postcodes: ["ML6"],
    responseTime: "Same day",
    description:
      "Airdrie external coating and refurbishment services for roughcast, render, and brickwork elevations, plus roof and uPVC upgrades.",
    localContext:
      "Fast lead times across Airdrie and nearby Lanarkshire commuter corridors.",
    metaTitle:
      "External Wall Coatings Airdrie | Kirkhall Wall Coatings",
    metaDescription:
      "Coatings and refurbishment services for Airdrie properties, including walls, roofs, and uPVC surfaces."
  },
  {
    name: "Wishaw",
    slug: "wishaw",
    region: "North Lanarkshire",
    postcodes: ["ML2"],
    responseTime: "Same day",
    description:
      "Wishaw coverage for wall coatings, roof restoration, and sprayed finish systems that improve curb appeal and durability.",
    localContext:
      "Convenient servicing for Wishaw households and commercial sites from our Motherwell base.",
    metaTitle:
      "Wall Coatings Wishaw | Kirkhall Wall Coatings",
    metaDescription:
      "Reliable wall coatings, roof refurbishment, and uPVC spraying for Wishaw properties."
  },
  {
    name: "Bellshill",
    slug: "bellshill",
    region: "North Lanarkshire",
    postcodes: ["ML4"],
    responseTime: "Next day",
    description:
      "Bellshill-area wall and roof coating works for private homes, landlords, and local commercial units needing durable external refurbishment.",
    localContext:
      "Efficient logistics for Bellshill and Eurocentral-adjacent projects.",
    metaTitle:
      "Wall and Roof Coatings Bellshill | Kirkhall Wall Coatings",
    metaDescription:
      "External coatings and refurbishment services for Bellshill properties, including masonry, roof tiles, and uPVC."
  },
  {
    name: "Kilsyth",
    slug: "kilsyth",
    region: "North Lanarkshire",
    postcodes: ["G65"],
    responseTime: "Next day",
    description:
      "External coating and roofline restoration services in Kilsyth, designed for elevated exposure and mixed traditional-modern housing.",
    localContext:
      "Coverage for Kilsyth and nearby villages with practical, weather-aware scheduling.",
    metaTitle:
      "External Coatings Kilsyth | Kirkhall Wall Coatings",
    metaDescription:
      "Kirkhall Wall Coatings provides wall coating systems, roof refurbishment, and uPVC spraying in Kilsyth."
  },
  {
    name: "North Lanarkshire",
    slug: "north-lanarkshire",
    region: "Lanarkshire",
    postcodes: ["ML1", "ML2", "ML4", "ML5", "ML6", "G67", "G68"],
    responseTime: "Same day to next day",
    description:
      "Regional service page covering Kirkhall Wall Coatings work across North Lanarkshire towns, focused on external wall systems, roof restoration, and sprayed finish upgrades.",
    localContext:
      "Primary operational region for Kirkhall Wall Coatings with the fastest site surveys and install starts."
  },
];

export const getAreaBySlug = (slug: string) => areas.find(a => a.slug === slug);
