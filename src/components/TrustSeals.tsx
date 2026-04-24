import { Shield, Award, Clock, Sparkles, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

// Import certification logos
import checkatradeImg from "@/assets/icons/certifications/Checkatrade-logo.webp";
import trustmarkImg from "@/assets/icons/certifications/TrustMark-logo.webp";
import fmbImg from "@/assets/icons/certifications/FMB-logo.webp";

interface TrustSealsProps {
  variant?: "compact" | "full";
  className?: string;
}

const TrustSeals = ({ variant = "compact", className = "" }: TrustSealsProps) => {
  const seals = [
    { icon: Shield, label: "10 Year Guarantee", sublabel: "Full coverage" },
    { icon: Award, label: "A-Rated Glazing", sublabel: "Energy efficient" },
    { icon: Clock, label: "7 Day Install", sublabel: "Most projects" },
    { icon: ThumbsUp, label: "100+ Installs", sublabel: "Satisfied customers" },
  ];

  interface Certification {
    img: string;
    alt: string;
    href?: string;
  }

  const certifications: Certification[] = [
    { 
      img: checkatradeImg, 
      alt: "Checkatrade Approved",
      href: siteConfig.social.checkatrade 
    },
    { img: trustmarkImg, alt: "TrustMark Registered" },
    { img: fmbImg, alt: "Federation of Master Builders" },
  ];

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
        {seals.map((seal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2 bg-card border-2 border-border px-4 py-2.5 hover:border-gold/50 transition-colors group"
          >
            <div className="w-8 h-8 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <seal.icon className="w-4 h-4 text-gold" strokeWidth={2} />
            </div>
            <span className="text-sm font-heading font-bold text-foreground uppercase tracking-wide">
              {seal.label}
            </span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {/* Trust badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {seals.map((seal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border-2 border-border p-4 hover:border-gold/50 transition-all group relative overflow-hidden"
          >
            {/* Gold left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
            
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <seal.icon className="w-6 h-6 text-gold" strokeWidth={2} />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-sm uppercase tracking-wide">
                  {seal.label}
                </p>
                <p className="text-xs text-muted-foreground">{seal.sublabel}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certification logos */}
      <div className="flex items-center justify-center gap-8 pt-6 border-t border-border">
        <span className="text-sm text-muted-foreground font-heading uppercase tracking-wide">Certified by:</span>
        {certifications.map((cert, index) => {
          const content = (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="h-10 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            >
              <img src={cert.img} alt={cert.alt} className="h-full w-auto object-contain" />
            </motion.div>
          );

          if (cert.href) {
            return (
              <a 
                key={index} 
                href={cert.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            );
          }

          return content;
        })}
      </div>
    </div>
  );
};

export default TrustSeals;
