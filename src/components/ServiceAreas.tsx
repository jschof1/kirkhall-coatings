import { MapPin, Phone, Navigation, ChevronRight, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { areas } from "@/data/areas";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ServiceAreas = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const regions = Array.from(new Set(areas.map((area) => area.region)))
    .map((region) => {
      const locations = areas.filter((area) => area.region === region);
      const postcodes = Array.from(new Set(locations.flatMap((area) => area.postcodes))).join(", ");

      return {
        id: region.toLowerCase().replace(/\s+/g, "-"),
        label: region,
        postcodes: postcodes || "Local coverage",
        locations,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <section id="areas" className="py-14 md:py-32 bg-primary relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block text-accent-contrast font-bold text-sm uppercase tracking-widest mb-6">
            Local Coverage
          </span>
          <h2 className="font-display text-section text-white mb-6 brush-underline">
            Serving <span className="text-gold-gradient">{siteConfig.serviceArea.regions.join(" & ")}</span>
          </h2>
          <p className="text-on-dark-muted text-lg md:text-xl leading-relaxed">
            Our local teams cover towns and cities across our core service area, with practical scheduling for surveys, preparation, and coating installations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden border-2 border-primary-foreground/20 shadow-editorial">
              <iframe 
                src="https://www.google.com/maps?q=Motherwell%2C+Scotland&z=9&output=embed"
                width="100%" 
                height="350" 
                className="w-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Areas"
              />
              
              {/* Overlay info box */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary to-primary/90">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent flex items-center justify-center shadow-accent-glow">
                    <Paintbrush className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-primary-foreground font-bold">
                      {siteConfig.serviceArea.regions.join(" & ")}
                    </h3>
                    <p className="text-accent-contrast font-bold uppercase tracking-wide text-sm">
                      Exterior Coating Specialists
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Areas List */}
          <div className="lg:col-span-5 space-y-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <button
                  onClick={() => setActiveRegion(activeRegion === region.id ? null : region.id)}
                  className={cn(
                    "w-full text-left bg-primary-foreground/10 p-6 border-2 transition-all duration-300 group",
                    activeRegion === region.id 
                      ? "border-primary-foreground/45 shadow-soft" 
                      : "border-primary-foreground/25 hover:border-primary-foreground/45"
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 flex items-center justify-center transition-colors",
                        activeRegion === region.id ? "bg-accent-contrast" : "bg-primary-foreground/15"
                      )}>
                        <Navigation className={cn(
                          "w-6 h-6",
                          activeRegion === region.id ? "text-primary" : "text-accent-contrast"
                        )} />
                      </div>
                      <div>
                        <h4 className="font-display text-xl text-white font-bold uppercase tracking-tight">
                          {region.label}
                        </h4>
                        <p className="text-xs text-on-dark-subtle font-bold uppercase tracking-widest">
                          {region.postcodes}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={cn(
                      "w-5 h-5 text-white/70 transition-transform",
                      activeRegion === region.id && "rotate-90"
                    )} />
                  </div>
                  
                  {/* Location pills */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: activeRegion === region.id ? "auto" : 0,
                      opacity: activeRegion === region.id ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-primary-foreground/25">
                      {region.locations.map((area, locIndex) => (
                        <Link
                          key={locIndex}
                          to={`/${area.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2 bg-primary-foreground/15 hover:bg-accent-contrast hover:text-primary text-white text-sm font-bold uppercase tracking-wide transition-all"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </button>
              </motion.div>
            ))}

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-editorial p-8 border-2 border-primary-foreground/35 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 transform rotate-45 translate-x-16 -translate-y-16" />
              
              <h3 className="font-display text-2xl text-white mb-3 font-bold relative z-10">
                Not Sure If We Cover You?
              </h3>
              <p className="text-on-dark-muted mb-6 relative z-10">
                Even if your town is not listed, we may still be able to schedule a survey nearby.
              </p>
              <Button asChild variant="paint" size="lg" className="relative z-10">
                <a href={getPhoneLink()} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.contact.phone}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
