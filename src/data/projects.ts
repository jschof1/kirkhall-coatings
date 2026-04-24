import externalWallImg from "@/assets/kirkhall/kirkhall-service-external-wall-coatings-4x3.jpeg";
import roofRefurbImg from "@/assets/kirkhall/kirkhall-service-roof-refurbishment-4x3.jpeg";
import upvcSprayingImg from "@/assets/kirkhall/kirkhall-service-upvc-spraying-4x3.jpeg";
import workmanshipImg from "@/assets/kirkhall/kirkhall-trust-team-workmanship-4x3.jpeg";
import heroWallImg from "@/assets/kirkhall/kirkhall-hero-external-wall-coating-16x9.jpeg";

export interface Project {
  slug: string;
  title: string;
  location: string;
  area: string;
  tag: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  details: {
    projectType: string;
    duration: string;
    materials: string[];
    warranty: string;
  };
  features: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
  relatedProjects: string[];
}

export const projects: Project[] = [
  {
    slug: "townhouse-interior-sevenoaks",
    title: "External Wall Coating Refurbishment",
    location: "Motherwell",
    area: "Motherwell",
    tag: "External Wall Coatings",
    image: externalWallImg,
    gallery: [externalWallImg, heroWallImg],
    shortDescription:
      "Full external wall coating refurbishment with crack repair, prep, sealing and multi-coat masonry finish.",
    fullDescription:
      "This Motherwell property required a full prep-led wall refurbishment. We repaired defects, treated biological growth, sealed the substrate, and applied a durable multi-coat masonry system for long-term weather protection.",
    details: {
      projectType: "External Wall Coating Refurbishment",
      duration: "6 Days",
      materials: ["Exterior Biocide", "Masonry Sealer", "Weatherproof Masonry Coating System"],
      warranty: "Guaranteed Workmanship",
    },
    features: ["Crack and substrate repairs", "Biocide clean and prep", "Minimum two-coat finish", "Neat site management"],
    relatedProjects: ["period-property-wallpapering", "exterior-transformation-maidstone"],
  },
  {
    slug: "period-property-wallpapering",
    title: "Roof Refurbishment and Coating",
    location: "Airdrie",
    area: "Airdrie",
    tag: "Roof Refurbishment",
    image: roofRefurbImg,
    gallery: [roofRefurbImg],
    shortDescription:
      "Roof cleaning, targeted repairs and protective coating system to restore appearance and resilience.",
    fullDescription:
      "This Airdrie roof refurbishment included contamination removal, repair work to vulnerable sections, and application of a protective coating system to improve long-term weather resistance and appearance.",
    details: {
      projectType: "Roof Refurbishment",
      duration: "4 Days",
      materials: ["Roof Cleaner", "Roof Repair Compound", "Protective Roof Coating"],
      warranty: "Guaranteed Workmanship",
    },
    features: ["Roof condition assessment", "Safe prep and access", "Targeted roof repairs", "Protective finish coating"],
    relatedProjects: ["townhouse-interior-sevenoaks", "exterior-transformation-maidstone"],
  },
  {
    slug: "exterior-transformation-maidstone",
    title: "uPVC Window and Door Spraying",
    location: "Glasgow",
    area: "Glasgow",
    tag: "uPVC Spraying",
    image: upvcSprayingImg,
    gallery: [upvcSprayingImg],
    shortDescription:
      "Colour transformation of windows and doors with HVLP spray application for a factory-style finish.",
    fullDescription:
      "This Glasgow project upgraded ageing uPVC windows and doors using a prep-first HVLP spray process. The result was a clean, modern finish without costly replacements.",
    details: {
      projectType: "uPVC Spraying",
      duration: "2 Days",
      materials: ["uPVC Adhesion Promoter", "HVLP Spray Coating", "Protective Clear Finish"],
      warranty: "Guaranteed Workmanship",
    },
    features: ["Professional masking", "Smooth spray-applied finish", "Fast turnaround", "Cost-effective refresh"],
    relatedProjects: ["townhouse-interior-sevenoaks", "commercial-office-refresh"],
  },
  {
    slug: "woodwork-restoration-bromley",
    title: "External Walls and Roof Upgrade",
    location: "Coatbridge",
    area: "Coatbridge",
    tag: "Wall and Roof Refurbishment",
    image: workmanshipImg,
    gallery: [workmanshipImg, externalWallImg, roofRefurbImg],
    shortDescription:
      "Combined external wall and roof refurbishment package for weather protection and curb appeal.",
    fullDescription:
      "This Coatbridge property received both wall and roof refurbishment. We coordinated prep and coatings across both surfaces to deliver a consistent and durable external finish.",
    details: {
      projectType: "Combined Wall and Roof Package",
      duration: "7 Days",
      materials: ["Masonry Coating System", "Roof Coating System", "Repair and Prep Consumables"],
      warranty: "Guaranteed Workmanship",
    },
    features: ["Single coordinated project plan", "Wall and roof prep sequencing", "Durable weatherproof finishes", "Neat handover"],
    relatedProjects: ["townhouse-interior-sevenoaks", "period-property-wallpapering"],
  },
  {
    slug: "commercial-office-refresh",
    title: "uPVC and Exterior Trim Refresh",
    location: "Wishaw",
    area: "Wishaw",
    tag: "uPVC and Trim Refurbishment",
    image: upvcSprayingImg,
    gallery: [upvcSprayingImg, workmanshipImg],
    shortDescription:
      "HVLP uPVC spraying and external trim refurbishment to modernise a residential frontage.",
    fullDescription:
      "This Wishaw project focused on refreshing visible external elements. uPVC windows, doors, and trims were prepped and resprayed to achieve a cohesive modern appearance.",
    details: {
      projectType: "uPVC and Trim Refresh",
      duration: "3 Days",
      materials: ["uPVC Spray Coating", "Trim Prep System", "Masking and Protection Materials"],
      warranty: "Guaranteed Workmanship",
    },
    features: ["Front elevation refresh", "Professional masking and prep", "Even factory-style spray finish", "Strong curb appeal uplift"],
    relatedProjects: ["exterior-transformation-maidstone", "woodwork-restoration-bromley"],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getRelatedProjects = (slugs: string[]): Project[] => {
  return projects.filter((project) => slugs.includes(project.slug));
};
