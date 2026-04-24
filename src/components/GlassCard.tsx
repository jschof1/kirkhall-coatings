import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = ({ children, className, hover = true, glow = false }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={cn(
        "relative rounded-2xl backdrop-blur-xl",
        "bg-white/10 border border-white/20",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        hover && "transition-all duration-300 cursor-pointer",
        glow && "before:absolute before:inset-0 before:rounded-2xl before:bg-gold/20 before:blur-xl before:-z-10",
        className
      )}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      </div>
      {children}
    </motion.div>
  );
};

export default GlassCard;
