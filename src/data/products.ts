import externalWallCoatingsImg from "@/assets/kirkhall/kirkhall-service-external-wall-coatings-4x3.jpeg";
import upvcSprayingImg from "@/assets/kirkhall/kirkhall-service-upvc-spraying-4x3.jpeg";

import {
  Paintbrush,
  SprayCan,
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
    metaDescription:
      "Prep-first external wall coating systems across Motherwell, North Lanarkshire, and Glasgow. Repairs, sealing, and durable weather-ready finishes.",
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
    relatedProducts: ["upvc-spraying"]
  },
  {
    slug: "upvc-spraying",
    title: "uPVC Window & Door Spraying",
    shortTitle: "uPVC Spraying",
    metaTitle: "uPVC Window Spraying Motherwell & Glasgow | Kirkhall Wall Coatings",
    metaDescription:
      "uPVC window and door spraying across Motherwell, North Lanarkshire, and Glasgow. HVLP prep, fascias, soffits, and trims with a durable factory-style finish.",
    icon: SprayCan,
    image: upvcSprayingImg,
    heroDescription: "Refresh exterior uPVC windows and doors with a clean spray-applied finish without full replacement.",
    shortDesc: "Window-led colour upgrades for uPVC frames, doors, fascias, and garage doors.",
    fullDescription: [
      "Our uPVC spraying service focuses on exterior windows and doors first, then trims and fascias where you want everything to match.",
      "We complete specialist cleaning and keying prep to support adhesion, then use controlled masking and spray application for sharp edges and smooth coverage.",
      "This approach is ideal for homeowners wanting a consistent external update without the cost of replacing serviceable uPVC."
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
    relatedProducts: ["external-wall-coatings"]
  }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);

export default products;
