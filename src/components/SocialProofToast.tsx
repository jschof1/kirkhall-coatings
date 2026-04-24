import { useState, useEffect } from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const socialProofData = [
  { name: "Sarah T.", location: "Sevenoaks", action: "requested a quote", time: "2 minutes ago" },
  { name: "Michael R.", location: "Tunbridge Wells", action: "booked a survey", time: "5 minutes ago" },
  { name: "Emma W.", location: "Bromley", action: "requested a quote", time: "8 minutes ago" },
  { name: "David M.", location: "Orpington", action: "booked a survey", time: "12 minutes ago" },
  { name: "James H.", location: "Maidstone", action: "requested a quote", time: "15 minutes ago" },
  { name: "Claire P.", location: "Canterbury", action: "booked a survey", time: "20 minutes ago" },
];

const SocialProofToast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing first toast
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Cycle through toasts
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % socialProofData.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    // Hide toast after showing
    const hideInterval = setInterval(() => {
      setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    }, 8000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
      clearInterval(hideInterval);
    };
  }, []);

  const currentProof = socialProofData[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-24 left-4 z-50 max-w-xs"
        >
          <div className="bg-card border-2 border-border shadow-lg p-4 relative overflow-hidden">
            {/* Gold accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
            
            <div className="flex items-start gap-3 pl-2">
              {/* Avatar placeholder */}
              <div className="w-10 h-10 bg-gold/20 border border-gold/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-gold" />
              </div>
              
              <div>
                <p className="text-sm font-heading font-bold text-foreground">
                  {currentProof.name} from {currentProof.location}
                </p>
                <p className="text-xs text-muted-foreground">
                  just {currentProof.action}
                </p>
                <p className="text-xs text-gold mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {currentProof.time}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofToast;
