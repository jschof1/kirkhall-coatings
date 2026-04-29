import externalWallCoatingsImg from "@/assets/kirkhall/kirkhall-service-external-wall-coatings-4x3.jpeg";
import roofRefurbishmentImg from "@/assets/kirkhall/kirkhall-service-roof-refurbishment-4x3.jpeg";
import upvcSprayingImg from "@/assets/kirkhall/kirkhall-service-upvc-spraying-4x3.jpeg";
import wallPrepRepairsImg from "@/assets/kirkhall/kirkhall-service-wall-prep-repairs-4x3.jpeg";
import upvcDoorSprayImg from "@/assets/kirkhall/kirkhall-service-upvc-door-spray-4x3.jpeg";
import fasciaConservatoryImg from "@/assets/kirkhall/kirkhall-service-fascia-conservatory-4x3.jpeg";

export interface PaintingService {
  title: string;
  shortDesc: string;
  accent: string;
  cta: string;
  image: string;
}

export const paintingServices: PaintingService[] = [
  {
    title: "External Wall Coatings",
    shortDesc: "Prep-led masonry coating systems that protect and refresh property exteriors.",
    accent: "18 56% 56%",
    cta: "Protect your external walls",
    image: externalWallCoatingsImg,
  },
  {
    title: "Roof Refurbishment",
    shortDesc: "Roof cleaning, repairs and protective coatings to extend roof life.",
    accent: "220 40% 18%",
    cta: "Restore your roof",
    image: roofRefurbishmentImg,
  },
  {
    title: "uPVC Window & Door Spraying",
    shortDesc: "Factory-style spray finishes for uPVC frames, doors, fascias and trims.",
    accent: "32 58% 58%",
    cta: "Transform your uPVC",
    image: upvcSprayingImg,
  },
  {
    title: "Wall Repairs, Sealing & Prep",
    shortDesc: "Loose damage repairs, biocide treatment, and prep sealing before final coatings.",
    accent: "214 50% 45%",
    cta: "Stabilise your walls first",
    image: wallPrepRepairsImg,
  },
  {
    title: "uPVC Door Spraying",
    shortDesc: "Dedicated front and back door spraying for a clean, modern finish.",
    accent: "210 68% 52%",
    cta: "Refresh your doors",
    image: upvcDoorSprayImg,
  },
  {
    title: "Fascia, Soffit & Conservatory Spraying",
    shortDesc: "Refurbishment spraying for external trim and conservatory uPVC frames.",
    accent: "205 62% 46%",
    cta: "Upgrade external trim",
    image: fasciaConservatoryImg,
  },
];
