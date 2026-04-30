import externalWallImg from "@/assets/kirkhall/kirkhall-service-external-wall-coatings-4x3.jpeg";
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
    slug: "external-wall-coating-motherwell",
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
    relatedProjects: ["upvc-window-respray-airdrie", "upvc-spraying-glasgow"],
  },
  {
    slug: "upvc-window-respray-airdrie",
    title: "uPVC Window and Door Respray",
    location: "Airdrie",
    area: "Airdrie",
    tag: "uPVC Spraying",
    image: upvcSprayingImg,
    gallery: [upvcSprayingImg],
    shortDescription:
      "Front elevation uPVC windows and doors colour-changed with HVLP prep, masking, and a durable spray finish.",
    fullDescription:
      "This Airdrie project focused on tired white uPVC windows and a composite-style front door. We deep cleaned and keyed surfaces, masked glazing and brickwork, then applied a coordinated anthracite-style spray system for a factory-smooth finish without replacement.",
    details: {
      projectType: "uPVC Window and Door Spraying",
      duration: "3 Days",
      materials: ["uPVC Adhesion Promoter", "HVLP Spray Coating", "Protective Clear Finish"],
      warranty: "Guaranteed Workmanship",
    },
    features: ["Window-led masking plan", "HVLP spray application", "Hardware-safe prep", "Colour-matched frames and door"],
    relatedProjects: ["external-wall-coating-motherwell", "upvc-spraying-glasgow"],
  },
  {
    slug: "upvc-spraying-glasgow",
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
    relatedProjects: ["external-wall-coating-motherwell", "combined-refurbishment-coatbridge"],
  },
  {
    slug: "combined-refurbishment-coatbridge",
    title: "External Walls and uPVC Refresh",
    location: "Coatbridge",
    area: "Coatbridge",
    tag: "Wall and uPVC Refurbishment",
    image: workmanshipImg,
    gallery: [workmanshipImg, externalWallImg, upvcSprayingImg],
    shortDescription:
      "Coordinated external wall coating and uPVC window and trim spraying for a matched, weather-ready exterior.",
    fullDescription:
      "This Coatbridge property received wall coating works alongside uPVC window and trim respraying. We sequenced prep and coatings so masonry and joinery finishes aligned for a consistent exterior refresh.",
    details: {
      projectType: "Wall Coating and uPVC Package",
      duration: "7 Days",
      materials: ["Masonry Coating System", "uPVC Spray Coating", "Repair and Prep Consumables"],
      warranty: "Guaranteed Workmanship",
    },
    features: ["Single coordinated project plan", "Wall prep then uPVC masking phases", "Durable weatherproof finishes", "Neat handover"],
    relatedProjects: ["external-wall-coating-motherwell", "upvc-spraying-glasgow"],
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
    relatedProjects: ["upvc-spraying-glasgow", "combined-refurbishment-coatbridge"],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getRelatedProjects = (slugs: string[]): Project[] => {
  return projects.filter((project) => slugs.includes(project.slug));
};
