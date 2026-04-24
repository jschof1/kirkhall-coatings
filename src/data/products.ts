import externalWallCoatingsImg from "@/assets/kirkhall/kirkhall-service-external-wall-coatings-4x3.jpeg";
import roofRefurbishmentImg from "@/assets/kirkhall/kirkhall-service-roof-refurbishment-4x3.jpeg";
import upvcSprayingImg from "@/assets/kirkhall/kirkhall-service-upvc-spraying-4x3.jpeg";

import {
  Paintbrush,
  SprayCan,
  Wrench,
  LucideIcon,
} from "lucide-react";

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  image: string;
  heroDescription: string;
  shortDesc: string;
  fullDescription: string[];
  features: string[];
  benefits: string[];
  faqs: ProductFAQ[];
  relatedProducts: string[];
}

export const products: Product[] = [
  {
    slug: "external-wall-coatings",
    title: "External Wall Coatings",
    shortTitle: "Wall Coatings",
    metaTitle: "External Wall Coatings Motherwell & Glasgow | Kirkhall Wall Coatings",
    metaDescription: "Prep-first external wall coating systems across Motherwell, North Lanarkshire, and Glasgow. Repairs, sealing, and durable weather-ready finishes.",
    icon: Paintbrush,
    image: externalWallCoatingsImg,
    heroDescription: "Protect and refresh tired masonry with external wall coating systems built for Scottish weather.",
    shortDesc: "Repair-led preparation, breathable systems, and long-lasting curb-appeal improvements.",
    fullDescription: [
      "Our external wall coating projects start with proper inspection and preparation. We assess the substrate, carry out crack repairs, and stabilise problem areas before applying any coating products.",
      "Systems are built around durability, with prep, sealing, and multi-coat application to resist moisture and weathering. This protects the building fabric while lifting the look of the property.",
      "Every project is scoped around property condition and access so customers receive a clear, practical solution rather than a one-size-fits-all quote."
    ],
    features: [
      "Substrate inspection and defect mapping",
      "Crack repair and stabilising prep",
      "Biocide treatment where required",
      "Minimum two-coat protective systems",
      "Breathable weather-resistant finishes",
      "Colour options for modern and traditional homes",
      "Clean, protected site setup",
      "Guaranteed workmanship"
    ],
    benefits: [
      "Longer-lasting external protection",
      "Reduced ongoing maintenance cycles",
      "Improved appearance and kerb appeal",
      "Better resistance to damp-driven deterioration",
      "Clear, survey-led project planning"
    ],
    faqs: [
      {
        question: "Can you coat rendered and roughcast walls?",
        answer: "In most cases yes. We inspect the existing substrate and specify preparation and products to match the wall condition."
      },
      {
        question: "How long does external wall coating last?",
        answer: "Service life varies by exposure and wall condition, but proper prep and application provide significantly longer protection than basic repaint-only approaches."
      }
    ],
    relatedProducts: ["roof-refurbishment", "upvc-spraying"]
  },
  {
    slug: "roof-refurbishment",
    title: "Roof Refurbishment",
    shortTitle: "Roof Refurbishment",
    metaTitle: "Roof Refurbishment North Lanarkshire | Kirkhall Wall Coatings",
    metaDescription: "Roof refurbishment across North Lanarkshire and Glasgow, including moss removal, repairs, and protective coating systems.",
    icon: Wrench,
    image: roofRefurbishmentImg,
    heroDescription: "Restore and protect tired roof surfaces with safe preparation, repairs, and specialist coating systems.",
    shortDesc: "Roof cleaning, remediation, and coating for stronger weather performance and cleaner presentation.",
    fullDescription: [
      "Roof refurbishment is focused on restoring performance before major replacement is considered. We remove moss and contamination, inspect condition, and complete targeted repairs as needed.",
      "Where suitable, we apply compatible roof coating systems that improve water-shedding and visual consistency across the roof surface.",
      "Projects are delivered with practical scheduling and clear recommendations so homeowners understand what is essential, what is optional, and why."
    ],
    features: [
      "Condition-led roof surveys",
      "Moss and debris removal",
      "Tile and ridge attention where required",
      "Prep and coating compatibility checks",
      "Safer access planning",
      "Coating options for tiled and concrete roofs",
      "Clear project scope and aftercare notes",
      "Low-disruption delivery"
    ],
    benefits: [
      "Extended roof service life",
      "Improved weather resistance",
      "Cleaner and more consistent roof finish",
      "Reduced risk from unresolved minor defects",
      "Cost-effective alternative to early replacement"
    ],
    faqs: [
      {
        question: "Is refurbishment suitable for every roof?",
        answer: "No. We assess structural condition first and only recommend refurbishment where the roof is a good candidate for repair and coating."
      },
      {
        question: "How long does a roof refurbishment take?",
        answer: "Most domestic projects take several days depending on roof size, access, and the level of remediation needed before coating."
      }
    ],
    relatedProducts: ["external-wall-coatings", "upvc-spraying"]
  },
  {
    slug: "upvc-spraying",
    title: "uPVC Window & Door Spraying",
    shortTitle: "uPVC Spraying",
    metaTitle: "uPVC Spraying Motherwell & Glasgow | Kirkhall Wall Coatings",
    metaDescription: "Durable uPVC spraying for windows, doors, fascias, soffits, and trims across Motherwell, North Lanarkshire, and Glasgow.",
    icon: SprayCan,
    image: upvcSprayingImg,
    heroDescription: "Transform uPVC windows, doors, and trims with a clean spray-applied finish without full replacement.",
    shortDesc: "A cost-effective way to modernise uPVC exteriors with a durable professional spray finish.",
    fullDescription: [
      "Our uPVC spraying service gives existing frames, doors, and trims a modern colour refresh without the cost of full replacement.",
      "We complete specialist cleaning and keying prep to support adhesion, then use controlled masking and spray application for sharp edges and smooth coverage.",
      "This approach is ideal for homeowners wanting a consistent external update across windows, doors, fascias, and garage doors."
    ],
    features: [
      "Adhesion-focused uPVC preparation",
      "Professional masking and protection",
      "Smooth spray-applied finish",
      "Windows, doors, fascias, and soffits",
      "Garage door colour change options",
      "Contemporary and classic colour choices",
      "Fast turnaround on domestic projects",
      "Durable exterior-grade products"
    ],
    benefits: [
      "Major visual uplift without replacement costs",
      "Consistent colour across mixed uPVC elements",
      "Improved finish quality compared with brush-only methods",
      "Lower disruption than full joinery replacement",
      "Long-lasting exterior appearance"
    ],
    faqs: [
      {
        question: "Can I choose any colour for uPVC spraying?",
        answer: "We offer a wide practical range and can guide you to colours that suit both your property style and substrate condition."
      },
      {
        question: "How durable is the finish?",
        answer: "With proper preparation and suitable products, uPVC spray finishes are designed for long-term external performance."
      }
    ],
    relatedProducts: ["external-wall-coatings", "roof-refurbishment"]
  }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);

export default products;
