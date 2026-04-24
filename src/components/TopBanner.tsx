import { Phone, Clock, ShieldCheck } from "lucide-react";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";

interface TopBannerProps {
  areaName?: string;
}

const TopBanner = ({ areaName }: TopBannerProps) => {
  const displayArea = areaName || "Motherwell, North Lanarkshire & Glasgow";

  return (
    <div className="hidden md:block bg-primary text-primary-foreground py-2.5 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent-contrast" />
            <span className="text-xs text-primary-foreground/90">Quick Response</span>
          </div>
          <div className="hidden md:flex items-center gap-2 border-l border-primary-foreground/20 pl-4">
            <ShieldCheck className="w-4 h-4 text-accent-contrast" />
            <span className="text-xs text-primary-foreground/70">Fully Insured • Quality Guaranteed</span>
          </div>
          <div className="flex items-center gap-2 border-l border-primary-foreground/20 pl-4">
            <span className="bg-primary-foreground/15 text-accent-contrast px-2 py-0.5 text-[10px] rounded-full font-medium">Serving</span>
            <span className="text-xs text-primary-foreground/70">
              {displayArea}
            </span>
          </div>
        </div>
        
        <a 
          href={getPhoneLink()} 
          className="flex items-center gap-2 hover:text-accent-contrast transition-colors group"
        >
          <span className="text-primary-foreground/60 text-xs">Call:</span>
          <span className="font-semibold flex items-center gap-2 text-sm text-primary-foreground">
            <Phone className="w-4 h-4 text-accent-contrast" />
            {siteConfig.contact.phone}
          </span>
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
