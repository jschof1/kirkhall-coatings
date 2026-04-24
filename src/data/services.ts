import externalWallCoatingsImg from "@/assets/kirkhall/kirkhall-service-external-wall-coatings-4x3.jpeg";
import roofRefurbishmentImg from "@/assets/kirkhall/kirkhall-service-roof-refurbishment-4x3.jpeg";
import upvcSprayingImg from "@/assets/kirkhall/kirkhall-service-upvc-spraying-4x3.jpeg";

import {
  Brush,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  LucideIcon,
  Paintbrush,
  Ruler,
  ShieldCheck,
  SprayCan,
  Wrench,
} from "lucide-react";

export interface ServicePricing {
  service: string;
  price: string;
  note?: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  image: string;
  heroDescription: string;
  shortDesc: string;
  fullDescription: string[];
  features: string[];
  pricing: ServicePricing[];
  faqs: ServiceFAQ[];
  areas: string[];
  relatedServices: string[];
  process: ServiceProcessStep[];
}

export const services: Service[] = [
  {
    slug: "external-wall-coatings",
    title: "External Wall Coatings",
    metaTitle: "External Wall Coatings Motherwell & Glasgow | Kirkhall Wall Coatings",
    metaDescription:
      "External wall coating specialists in Motherwell, North Lanarkshire and Glasgow. Full prep, repairs and multi-coat weatherproof systems built to last.",
    icon: Paintbrush,
    image: externalWallCoatingsImg,
    heroDescription:
      "Repair, seal and coat masonry with durable external wall systems designed for Scottish weather.",
    shortDesc:
      "Crack repair, biocide prep and minimum two-coat protection for cleaner, longer-lasting exteriors.",
    fullDescription: [
      "Our external wall coating service starts with proper diagnosis and preparation. We remove loose material, treat biological growth, and repair cracks before any coating is applied so the system performs as intended.",
      "We use proven masonry products applied in a controlled sequence, typically primer and at least two top coats. This creates a breathable, weather-resistant finish that protects against moisture ingress and improves kerb appeal.",
      "Every quote is tailored to property condition, access, and finish goals so homeowners can choose a solution with clear scope and expectations."
    ],
    features: [
      "Full masonry assessment and defect mapping",
      "Crack and substrate repairs before coating",
      "Biocide wash and stabilising sealer where required",
      "Minimum two-coat external wall system",
      "Breathable, weather-resistant finish",
      "Colour guidance to suit local property styles",
      "Clean, protected working areas and tidy handover",
      "Guaranteed workmanship from a timeserved team",
    ],
    pricing: [
      { service: "Front Elevation Coating", price: "From £1,450", note: "Typical terrace front" },
      { service: "Semi-Detached Exterior System", price: "From £2,950", note: "Subject to access and prep" },
      { service: "Detached Full Exterior", price: "Survey Quote", note: "Detailed written scope provided" },
      { service: "Masonry Repair Pack", price: "From £350", note: "Bundled with full coating projects" },
    ],
    faqs: [
      {
        question: "How long does an external wall coating system last?",
        answer:
          "Lifespan depends on substrate condition and exposure, but properly prepared and applied systems typically provide long-term protection well beyond standard masonry paint refresh cycles."
      },
      {
        question: "Do you repair cracks before coating?",
        answer:
          "Yes. We complete crack and surface repairs during prep so the coating bonds correctly and performs as a protective system, not just a cosmetic top layer."
      },
      {
        question: "Can you coat pebble dash and rendered walls?",
        answer:
          "In most cases yes. We inspect substrate type and condition first, then specify compatible prep and coating products for the existing finish."
      },
    ],
    areas: ["Motherwell", "Airdrie", "Coatbridge", "Wishaw", "Bellshill", "Glasgow", "Cumbernauld"],
    relatedServices: ["roof-refurbishment", "upvc-spraying"],
    process: [
      { title: "Survey & Scope", description: "On-site inspection, moisture and substrate checks, then a written plan.", icon: Ruler },
      { title: "Prep & Repair", description: "Clean down, biocide treatment and defect repairs before priming.", icon: ClipboardCheck },
      { title: "Coating Application", description: "Apply the specified coating system and complete final quality checks.", icon: CheckCircle2 },
    ],
  },
  {
    slug: "roof-refurbishment",
    title: "Roof Refurbishment",
    metaTitle: "Roof Refurbishment North Lanarkshire | Kirkhall Wall Coatings",
    metaDescription:
      "Roof refurbishment for tiled and concrete roofs across North Lanarkshire and Glasgow. Safe prep, moss removal, repairs and protective roof coatings.",
    icon: Wrench,
    image: roofRefurbishmentImg,
    heroDescription:
      "Restore tired roofs with safe cleaning, targeted repairs and long-lasting coating systems.",
    shortDesc:
      "Moss removal, repairs and specialist roof coatings to extend roof life and improve appearance.",
    fullDescription: [
      "Our roof refurbishment service is focused on extending roof lifespan while improving appearance. We clear biological growth, clean surfaces safely, and identify defects before coatings are considered.",
      "Loose ridge, damaged tiles and localised issues are addressed as part of the refurbishment process. We then apply compatible primers and roof coatings suited to the roof type and condition.",
      "The result is a cleaner, more uniform roof surface with added weather resistance and a clear maintenance pathway for the future."
    ],
    features: [
      "Roof condition survey and photo-led reporting",
      "Moss, algae and debris removal",
      "Minor roof repairs and ridge attention",
      "Compatible roof primers and coating systems",
      "Safer access planning and edge protection",
      "Colour restoration options for faded roofs",
      "Water-shedding performance improvement",
      "Clear aftercare guidance for homeowners",
    ],
    pricing: [
      { service: "Roof Cleaning & Treatment", price: "From £1,250", note: "Typical 2-3 bed property" },
      { service: "Roof Coating System", price: "From £2,450", note: "Prep and coating included" },
      { service: "Repair & Refurb Package", price: "Survey Quote", note: "Based on roof condition" },
      { service: "Detached Roof Refurbishment", price: "Survey Quote", note: "Access dependent" },
    ],
    faqs: [
      {
        question: "Do I need a full roof replacement or can it be refurbished?",
        answer:
          "Many roofs benefit from refurbishment when the main structure is sound. We assess condition first and only recommend replacement when refurbishment would be poor value."
      },
      {
        question: "Is roof spraying just cosmetic?",
        answer:
          "A proper roof coating system is not just cosmetic. With the correct prep and products it helps protect tiles, reduce water uptake and improve long-term roof resilience."
      },
      {
        question: "How disruptive is roof refurbishment?",
        answer:
          "Most residential jobs are managed with minimal disruption. We plan access and sequence works to keep noise, overspray risk and site mess under control."
      },
    ],
    areas: ["Motherwell", "Wishaw", "Hamilton", "Airdrie", "Coatbridge", "Glasgow", "East Kilbride"],
    relatedServices: ["external-wall-coatings", "upvc-spraying"],
    process: [
      { title: "Roof Survey", description: "Assess tile condition, ridge stability and contamination levels.", icon: Ruler },
      { title: "Clean & Repair", description: "Remove growth, complete repairs and prepare the roof surface.", icon: Brush },
      { title: "Prime & Coat", description: "Apply primer and roof coating in controlled coats for coverage.", icon: ShieldCheck },
    ],
  },
  {
    slug: "upvc-spraying",
    title: "uPVC Window & Door Spraying",
    metaTitle: "uPVC Spraying Motherwell & Glasgow | Kirkhall Wall Coatings",
    metaDescription:
      "uPVC spraying specialists for windows, doors, fascias and garage doors in Motherwell and Glasgow. Factory-style spray finish without full replacement cost.",
    icon: SprayCan,
    image: upvcSprayingImg,
    heroDescription:
      "Refresh tired uPVC windows, doors and trims with a durable spray-applied finish in modern colours.",
    shortDesc:
      "Cost-effective colour transformation for uPVC frames, doors, fascias and garage doors.",
    fullDescription: [
      "uPVC spraying is a fast, cost-effective way to modernise property exteriors without replacing serviceable frames and trims. We deep clean and key surfaces to ensure dependable adhesion.",
      "Using professional masking and spray equipment, we deliver smooth, even coverage with minimal disruption. Popular upgrades include anthracite grey, black and contemporary neutral palettes.",
      "Our process is designed for durability, helping homeowners achieve a factory-style finish and extend the visual life of existing uPVC components."
    ],
    features: [
      "Specialist prep for uPVC adhesion",
      "Professional masking for crisp lines",
      "Spray application for smooth coverage",
      "Windows, doors, fascias and soffits",
      "Garage door colour changes available",
      "Wide colour range including modern greys",
      "Quick turnaround on domestic projects",
      "Cost-effective alternative to replacement",
    ],
    pricing: [
      { service: "Front Door Respray", price: "From £280", note: "Single colour, exterior face" },
      { service: "uPVC Window Set", price: "From £650", note: "Typical front elevation set" },
      { service: "Fascia & Soffit Spraying", price: "From £900", note: "Property size dependent" },
      { service: "Full Exterior uPVC Package", price: "Survey Quote", note: "Windows, doors and trims" },
    ],
    faqs: [
      {
        question: "How long does uPVC spray coating last?",
        answer:
          "With proper preparation and suitable products, uPVC spray finishes are durable and designed for long-term exterior use under UK weather conditions."
      },
      {
        question: "Can any colour be matched?",
        answer:
          "We offer a broad colour range and can usually match popular shades. During survey we confirm practical options and expected finish for your specific surfaces."
      },
      {
        question: "Do I need to replace handles and fittings first?",
        answer:
          "Usually not. We remove or carefully mask fittings as needed and can advise if any hardware changes would improve the final look."
      },
    ],
    areas: ["Motherwell", "Bellshill", "Coatbridge", "Airdrie", "Cumbernauld", "Glasgow", "Bothwell"],
    relatedServices: ["external-wall-coatings", "roof-refurbishment"],
    process: [
      { title: "Surface Prep", description: "Deep clean, degrease and key uPVC surfaces for adhesion.", icon: Droplets },
      { title: "Mask & Protect", description: "Protect glass, brickwork and trims before spraying begins.", icon: ClipboardCheck },
      { title: "Spray Finish", description: "Apply spray coats for an even, durable factory-style result.", icon: CheckCircle2 },
    ],
  },
  {
    slug: "wall-repairs-sealing-prep",
    title: "Wall Repairs, Sealing & Prep",
    metaTitle: "Wall Repairs and Sealing Prep Motherwell | Kirkhall Wall Coatings",
    metaDescription:
      "Loose render repairs, crack treatment, biocide wash and stabilising sealer prep for external walls across Motherwell, North Lanarkshire and Glasgow.",
    icon: ShieldCheck,
    image: externalWallCoatingsImg,
    heroDescription:
      "Prep-led wall restoration before coating, including repairs, treatment and sealing for reliable long-term results.",
    shortDesc:
      "We repair loose damage, treat contaminated surfaces and seal walls before final coating systems are applied.",
    fullDescription: [
      "Many coating failures start with poor preparation. This service focuses on the core repair and prep stages that make external wall coatings perform properly.",
      "We identify loose sections, treat cracks and vulnerable areas, complete biocide cleaning where needed, and apply suitable sealers before top coats are considered.",
      "It is ideal for homeowners who need walls stabilised before a full coating system or want a dedicated prep package included within wider refurbishment works."
    ],
    features: [
      "Loose and damaged wall section repairs",
      "Crack prep and stabilisation work",
      "Biocide cleaning where contamination is present",
      "Stabilising sealer application",
      "Prep specification matched to substrate condition",
      "Ready-for-coating handover standard",
      "Clear defect reporting before top coats",
      "Can be bundled into full wall coating projects",
    ],
    pricing: [
      { service: "Local Repair & Prep Visit", price: "From £320", note: "Smaller isolated areas" },
      { service: "Front Elevation Prep Package", price: "From £780", note: "Before full coating system" },
      { service: "Full Property Prep Scope", price: "Survey Quote", note: "Condition-led pricing" },
      { service: "Prep + Coating Bundle", price: "Survey Quote", note: "Combined value pricing" },
    ],
    faqs: [
      {
        question: "Can I skip prep and go straight to coating?",
        answer:
          "Skipping prep often shortens coating lifespan. We recommend correct repairs, cleaning and sealing first so the final system can bond and perform properly."
      },
      {
        question: "Do you include crack repairs in this service?",
        answer:
          "Yes. Crack treatment and defect stabilisation are a core part of this prep-led service."
      },
      {
        question: "Can this be included with full external wall coatings?",
        answer:
          "Absolutely. Many clients choose this as phase one before a full wall coating system."
      },
    ],
    areas: ["Motherwell", "Airdrie", "Coatbridge", "Wishaw", "Bellshill", "Glasgow", "Cumbernauld"],
    relatedServices: ["external-wall-coatings", "roof-refurbishment"],
    process: [
      { title: "Defect Survey", description: "Inspect loose areas, cracks and contamination before works start.", icon: Ruler },
      { title: "Repair & Treat", description: "Repair damaged sections and complete biocide treatment where needed.", icon: Wrench },
      { title: "Seal & Handover", description: "Seal prepared walls and hand over ready for top-coat application.", icon: CheckCircle2 },
    ],
  },
  {
    slug: "upvc-door-spraying",
    title: "uPVC Door Spraying",
    metaTitle: "uPVC Door Spraying Motherwell | Kirkhall Wall Coatings",
    metaDescription:
      "Specialist uPVC front and back door spraying using HVLP application for durable, modern colour changes across North Lanarkshire and Glasgow.",
    icon: SprayCan,
    image: upvcSprayingImg,
    heroDescription:
      "Give tired uPVC doors a clean factory-style colour upgrade without full replacement.",
    shortDesc:
      "HVLP spray refinishing for front and rear uPVC doors with careful masking and prep.",
    fullDescription: [
      "Our uPVC door spraying service focuses specifically on high-visibility entrance doors where finish quality matters most.",
      "We deep clean, key, mask and spray using controlled HVLP methods to deliver an even finish with strong adhesion and professional colour consistency.",
      "This is a practical option for homeowners wanting a fresh modern look while avoiding the cost and disruption of full door replacement."
    ],
    features: [
      "Dedicated door-only spray service",
      "HVLP application for smoother coverage",
      "Careful hardware and frame masking",
      "Popular colour upgrades including anthracite",
      "Cost-effective replacement alternative",
      "Fast domestic turnaround",
      "Prep-first process for adhesion",
      "Durable external finish",
    ],
    pricing: [
      { service: "Single uPVC Door Respray", price: "From £280", note: "Exterior face only" },
      { service: "Front + Rear Door Package", price: "From £520", note: "Two-door colour refresh" },
      { service: "Door + Side Panel Set", price: "From £420", note: "Survey dependent" },
      { service: "Door Colour Match Consultation", price: "Included", note: "With confirmed booking" },
    ],
    faqs: [
      {
        question: "Can you spray both front and back doors?",
        answer:
          "Yes. We regularly spray front and rear uPVC doors as standalone jobs or packaged together."
      },
      {
        question: "Will the spray finish peel quickly?",
        answer:
          "With proper prep and suitable coatings, finishes are designed for long-term external use."
      },
      {
        question: "Do you spray door frames as well?",
        answer:
          "Yes, where required we can include surrounding frame sections for a consistent finish."
      },
    ],
    areas: ["Motherwell", "Bellshill", "Coatbridge", "Airdrie", "Cumbernauld", "Glasgow", "Wishaw"],
    relatedServices: ["upvc-spraying", "external-wall-coatings"],
    process: [
      { title: "Clean & Key", description: "Prepare door surfaces and remove contaminants for adhesion.", icon: Droplets },
      { title: "Mask & Setup", description: "Mask glazing, hardware and surrounding areas before spraying.", icon: ClipboardCheck },
      { title: "Spray Finish", description: "Apply controlled spray coats for a consistent modern result.", icon: CheckCircle2 },
    ],
  },
  {
    slug: "upvc-fascia-soffit-conservatory-spraying",
    title: "uPVC Fascia, Soffit & Conservatory Spraying",
    metaTitle: "uPVC Fascia and Conservatory Spraying Glasgow | Kirkhall Wall Coatings",
    metaDescription:
      "Refurbishment spraying for uPVC fascias, soffits and conservatory frames across Motherwell, North Lanarkshire and Glasgow.",
    icon: SprayCan,
    image: upvcSprayingImg,
    heroDescription:
      "Refresh external uPVC trims and conservatory frames with durable spray-applied colour systems.",
    shortDesc:
      "Specialist spraying for fascias, soffits and conservatory uPVC to modernise exterior appearance.",
    fullDescription: [
      "This service extends our uPVC spraying beyond windows and doors to include external trim systems and conservatory frames.",
      "We use the same prep-led approach: thorough cleaning, keying, masking and controlled spray application for a durable, uniform finish.",
      "It is suitable for properties where white or faded trim no longer matches updated windows, doors, or wall coatings."
    ],
    features: [
      "Fascia and soffit spray refurbishment",
      "Conservatory frame colour changes",
      "Professional masking around rooflines",
      "Colour matching across external uPVC elements",
      "HVLP spray application",
      "Reduced replacement costs",
      "Consistent finish across trims and frames",
      "Weather-ready coating products",
    ],
    pricing: [
      { service: "Fascia & Soffit Front Elevation", price: "From £900", note: "Property size dependent" },
      { service: "Conservatory Frame Respray", price: "From £1,150", note: "Frame complexity dependent" },
      { service: "Full Trim & Conservatory Package", price: "Survey Quote", note: "Bundled uPVC refresh" },
      { service: "Colour Consistency Upgrade", price: "Included", note: "With package projects" },
    ],
    faqs: [
      {
        question: "Can you spray conservatory uPVC frames?",
        answer:
          "Yes. Conservatory frame spraying is part of this service when access and condition allow."
      },
      {
        question: "Do fascias and soffits need replacing first?",
        answer:
          "Not usually. If the substrate is sound, spraying is often a practical refurbishment route."
      },
      {
        question: "Can colours match my sprayed doors and windows?",
        answer:
          "Yes, we can align trim and conservatory colours with other uPVC elements for a consistent overall look."
      },
    ],
    areas: ["Motherwell", "Airdrie", "Coatbridge", "Bellshill", "Wishaw", "Cumbernauld", "Glasgow"],
    relatedServices: ["upvc-spraying", "upvc-door-spraying"],
    process: [
      { title: "Area Survey", description: "Check access, substrate condition and coverage requirements.", icon: Ruler },
      { title: "Prep & Mask", description: "Clean, key and mask adjacent surfaces before spray work begins.", icon: ClipboardCheck },
      { title: "Spray Application", description: "Apply durable spray coats for uniform finish across all elements.", icon: CheckCircle2 },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getRelatedServices = (slugs: string[]): Service[] => {
  return services.filter(service => slugs.includes(service.slug));
};

