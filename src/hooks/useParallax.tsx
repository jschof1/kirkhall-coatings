import { useState, useEffect, useRef, RefObject } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
  disabled?: boolean;
}

interface ParallaxResult {
  ref: RefObject<HTMLDivElement>;
  y: number;
  progress: number;
}

const useParallax = (options: ParallaxOptions = {}): ParallaxResult => {
  const { speed = 0.3, direction = "up", disabled = false } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element has scrolled through the viewport
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      
      // Calculate parallax offset
      const offset = (scrollProgress - 0.5) * speed * 100;
      const finalOffset = direction === "up" ? -offset : offset;

      setY(finalOffset);
      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction, disabled]);

  return { ref, y, progress };
};

export default useParallax;
