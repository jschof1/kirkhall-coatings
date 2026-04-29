import { useState } from "react";
import { paintingServices } from "@/data/paintingServices";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";

interface ProductsGridProps {
  areaName?: string;
}

const INITIAL_VISIBLE = 6;

const ProductsGrid = ({ areaName }: ProductsGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const displayArea = areaName || siteConfig.serviceArea.primary;

  const visibleServices = showAll ? paintingServices : paintingServices.slice(0, INITIAL_VISIBLE);
  const hasMore = paintingServices.length > INITIAL_VISIBLE;

  return (
    <section id="services" className="py-10 md:py-16 bg-primary relative overflow-hidden">
      {/* Subtle texture for dark background */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Wall Coatings & Refurbishment
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Premium finishes and meticulous preparation for homes across {displayArea}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full bg-card border-2 border-border shadow-soft-sm overflow-hidden transition-all duration-300 group-hover:shadow-elevated group-hover:border-accent/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-1 h-12 bg-accent" />
                </div>
                <div className="border-t-2 border-border bg-secondary p-6 md:p-8">
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="border-2"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  View All Services
                  <ChevronDown className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;
