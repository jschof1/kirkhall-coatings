import { Star } from "lucide-react";
import GoogleIcon from "./GoogleIcon";
import { motion } from "framer-motion";

const GoogleTrustStrip = () => {
  return (
    <div className="bg-cream border-b-2 border-gold/20 py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center gap-6 md:gap-8">
        {/* Google Logo */}
        <div className="flex items-center gap-2">
          <GoogleIcon className="w-6 h-6" />
          <span className="text-sm font-heading font-bold text-foreground hidden sm:inline">Google Reviews</span>
        </div>
        
        {/* Stars with animation */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
            >
              <Star className="w-5 h-5 fill-gold text-gold" />
            </motion.div>
          ))}
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl text-foreground">4.9</span>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-heading font-bold text-foreground uppercase tracking-wide">Excellent</p>
            <p className="text-xs text-muted-foreground">100+ Reviews</p>
          </div>
        </div>

        {/* Badge */}
        <div className="hidden md:flex items-center gap-2 bg-gold/10 border border-gold/30 px-3 py-1.5">
          <span className="w-2 h-2 bg-trust rounded-full animate-pulse" />
          <span className="text-xs font-heading font-bold text-foreground uppercase tracking-wide">
            Rated Excellent
          </span>
        </div>
      </div>
    </div>
  );
};

export default GoogleTrustStrip;
