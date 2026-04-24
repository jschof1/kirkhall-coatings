import { useState, useEffect, useCallback } from "react";
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";  
import { Button } from "@/components/ui/button";
import { getPhoneLink } from "@/data/siteConfig";
import googleLogo from "@/assets/icons/certifications/google-g-logo.svg";

interface TestimonialsProps {
  areaName?: string;
}

const Testimonials = ({ areaName }: TestimonialsProps) => {
  const displayArea = areaName || "Motherwell & North Lanarkshire";
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Alan M",
      location: "ML1",
      rating: 5,
      text: "The team repaired and coated our front elevation exactly as promised. Great prep work and a spotless finish.",
      service: "External wall coatings",
      initials: "AM",
    },
    {
      name: "Karen D",
      location: "G67",
      rating: 5,
      text: "Roof refurbishment was completed on schedule and the communication was excellent from quote to handover.",
      service: "Roof refurbishment",
      initials: "KD",
    },
    {
      name: "Verified Customer",
      location: "ML2",
      rating: 5,
      text: "Our uPVC windows and door look brand new. Colour match is perfect and the workmanship really is top class.",
      service: "uPVC spraying",
      initials: "VC",
    },
    {
      name: "Stephen R",
      location: "G33",
      rating: 5,
      text: "Timeserved crew, honest quote, and no corners cut on prep. We are delighted with the completed coating system.",
      service: "External wall coatings",
      initials: "SR",
    },
    {
      name: "Verified Customer",
      location: "ML5",
      rating: 5,
      text: "From inspection to completion they were reliable and tidy every day. The new roof finish has transformed the property.",
      service: "Roof refurbishment",
      initials: "VC",
    },
    {
      name: "Louise P",
      location: "G71",
      rating: 5,
      text: "Fast local response, clear advice, and guaranteed workmanship exactly as discussed. Highly recommend Kirkhall.",
      service: "uPVC spraying",
      initials: "LP",
    },
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      id="reviews" 
      className="py-20 md:py-28 bg-primary relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle texture for dark background */}
      <div className="absolute inset-0 pattern-dots opacity-10" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest mb-4">
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Trusted Across <span className="text-gold-gradient">{displayArea}</span>
          </h2>
          
          {/* Google Rating */}
          <div className="inline-flex items-center gap-3 mt-4">
            <div className="flex">
              <img src={googleLogo} alt="Google" className="h-5 w-auto mr-2" />
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-bold text-white">5.0</span>
            <span className="text-white/60">from 100+ Reviews</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute -left-1 top-1/2 -translate-y-1/2 md:-translate-x-14 w-8 h-8 md:w-10 md:h-10 bg-primary-foreground/10 border border-primary-foreground/20 hover:border-accent flex items-center justify-center transition-colors z-10 text-primary-foreground"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-1 top-1/2 -translate-y-1/2 md:translate-x-14 w-8 h-8 md:w-10 md:h-10 bg-primary-foreground/10 border border-primary-foreground/20 hover:border-accent flex items-center justify-center transition-colors z-10 text-primary-foreground"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 md:p-10 relative shadow-soft"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-accent/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-6">
                "{testimonials[activeIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">
                    {testimonials[activeIndex].initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    {testimonials[activeIndex].name}
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </h4>
                  <p className="text-sm text-white/60">
                    {testimonials[activeIndex].location} · {testimonials[activeIndex].service}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 transition-all duration-300",
                  index === activeIndex 
                    ? "bg-accent w-6" 
                    : "bg-border w-2 hover:bg-muted-foreground"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="paint" size="lg">
            <a href={getPhoneLink()} className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call for Free Estimate
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
