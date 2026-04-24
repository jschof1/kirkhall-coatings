import { Phone } from "lucide-react";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";

const MobileCallButton = () => {
  return (
    <a
      href={getPhoneLink()}
      className="fixed bottom-4 left-4 z-50 md:hidden flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-3 shadow-accent-glow font-bold uppercase tracking-wide transition-all active:scale-95 border-2 border-accent sm:bottom-6 sm:left-6"
      aria-label={`Call ${siteConfig.business.name}`}
    >
      <Phone className="w-5 h-5" />
      <span className="text-sm">Call Expert</span>
    </a>
  );
};

export default MobileCallButton;
