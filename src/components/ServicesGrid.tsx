import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { services as servicesData } from "@/data/services";
import { ChevronDown, ChevronUp, CheckCircle2, ArrowRight } from "lucide-react";

interface ServicesGridProps {
  areaName?: string;
}

const INITIAL_VISIBLE = 6;

const ServicesGrid = ({ areaName }: ServicesGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const displayArea = areaName || "Motherwell, North Lanarkshire & Glasgow";
  
  const visibleServices = showAll ? servicesData : servicesData.slice(0, INITIAL_VISIBLE);
  const hasMore = servicesData.length > INITIAL_VISIBLE;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-accent-contrast font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-1.5 bg-accent/15 rounded-full border border-primary-foreground/30">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Specialist Coating Services in {displayArea}
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            External wall coatings and uPVC window and door spraying
            delivered with prep-first standards across {displayArea}.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {visibleServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link to={`/${service.slug}`} className="block h-full group">
                  <Card className="border-2 border-surface-dark overflow-hidden transition-all duration-300 cursor-pointer bg-surface-dark hover:bg-surface-dark-strong hover:shadow-elevated hover:border-primary-foreground/50 hover:-translate-y-1 h-full">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      
                      {/* Icon badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-primary/90 p-2.5 border-2 border-primary-foreground/35">
                          <Icon className="w-5 h-5 text-accent-contrast" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-display font-black text-lg text-white leading-tight mb-2 group-hover:text-accent-contrast transition-colors uppercase tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-on-dark-subtle text-sm leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>
                      
                      {/* Quick features */}
                      <div className="space-y-1.5 mb-4">
                        {service.features.slice(0, 2).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-on-dark-subtle">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-contrast shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t-2 border-primary-foreground/20">
                        <span className="text-accent-contrast text-sm font-bold uppercase tracking-wide group-hover:gap-2 transition-all inline-flex items-center gap-1">
                          Learn more
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-xs font-bold text-primary-foreground bg-primary/55 px-2.5 py-1 border border-primary-foreground/35">
                          {service.pricing[0]?.price}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* See More Button */}
        {hasMore && (
          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all hover:-translate-y-0.5 group border border-accent/80"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  See All <span className="font-bold">{servicesData.length}</span> Services
                  <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-on-dark-subtle mb-3">
            Not sure which coating service is right for your property?
          </p>
          <Link
            to="/get-quote"
            className="text-accent-contrast font-bold hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
          >
            Get a free consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
