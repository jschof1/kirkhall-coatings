import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IndustrialPanelProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accentPosition?: "left" | "top" | "none";
}

const IndustrialPanel = ({ 
  children, 
  className, 
  hover = true, 
  accentPosition = "left" 
}: IndustrialPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={hover ? { y: -2 } : undefined}
      className={cn(
        "relative bg-card border-3 border-border",
        hover && "transition-all duration-150 cursor-pointer hover:border-accent/50",
        className
      )}
    >
      {/* Accent bar based on position */}
      {accentPosition === "left" && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
      )}
      {accentPosition === "top" && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
      )}
      
      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent/30" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent/30" />
      
      {children}
    </motion.div>
  );
};

export default IndustrialPanel;
