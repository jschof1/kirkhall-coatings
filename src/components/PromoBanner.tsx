import { useState } from "react";
import { X, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { motion, AnimatePresence } from "framer-motion";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Get current month for dynamic promo text
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('promo-dismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="hidden sm:block bg-primary overflow-hidden relative border-b border-accent/20"
        >
          <div className="container mx-auto px-3 md:px-4 py-1 md:py-1.5 relative">
            <div className="flex items-center justify-center gap-2 md:gap-8">
              {/* Urgency icon — hidden on mobile for space */}
              <div className="hidden md:flex items-center gap-1.5 text-primary-foreground/90">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span className="font-bold text-[10px] whitespace-nowrap uppercase tracking-widest">
                  Limited Time
                </span>
              </div>

              {/* Main promo text */}
              <div className="text-center min-w-0">
                <span className="font-bold text-[11px] md:text-sm text-primary-foreground uppercase tracking-wider">
                  <span className="text-accent">15% OFF</span> this {currentMonth}
                </span>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="h-6 md:h-7 px-2 md:px-3 text-[10px] shrink-0 border border-accent/30 hover:bg-accent hover:text-accent-foreground text-accent font-bold uppercase tracking-widest transition-all"
              >
                <a href={getPhoneLink()} className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>Claim</span>
                </a>
              </Button>

              {/* Dismiss button */}
              <button
                onClick={handleDismiss}
                className="p-0.5 md:p-1 text-primary-foreground/50 hover:text-primary-foreground transition-colors shrink-0"
                aria-label="Dismiss promotion"
              >
                <X className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoBanner;
