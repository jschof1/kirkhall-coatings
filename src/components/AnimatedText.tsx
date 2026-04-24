import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}

export const AnimatedText = ({ text, className, delay = 0, gradient = false }: AnimatedTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: delay },
    }),
  };

  // Stamp-in effect for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: -15,
      scale: 1.05,
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("inline-flex flex-wrap", className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className={cn(
            "mr-[0.25em]",
            gradient && "bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent"
          )}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export const GradientText = ({ children, className, animate = false }: GradientTextProps) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent",
        animate && "animate-gradient bg-[length:200%_auto]",
        className
      )}
    >
      {children}
    </span>
  );
};

// Industrial text with underline accent
interface IndustrialTextProps {
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
}

export const IndustrialText = ({ children, className, underline = true }: IndustrialTextProps) => {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      {underline && (
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gold" />
      )}
    </span>
  );
};

export default AnimatedText;
