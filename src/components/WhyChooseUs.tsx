import { Users, Award, ThumbsUp, Sparkles, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import logoVan from "@/assets/kirkhall/kirkhall-trust-team-workmanship-4x3.jpeg";

interface WhyChooseUsProps {
  areaName?: string;
}

const WhyChooseUs = ({ areaName }: WhyChooseUsProps) => {
  const displayArea = areaName || siteConfig.serviceArea.primary;

  const reasons = [
    {
      icon: Users,
      title: "Timeserved Team",
      description:
        "Skilled coatings specialists focused on long-term performance.",
    },
    {
      icon: Clock,
      title: "Prep-First Process",
      description:
        "Every project starts with repairs, cleaning and correct substrate prep.",
    },
    {
      icon: ThumbsUp,
      title: "Top Class Workmanship",
      description:
        "Consistent standards from first survey through final handover.",
    },
    {
      icon: Sparkles,
      title: "Durable Coating Systems",
      description:
        "Weather-resistant finishes for external walls, roofs and uPVC.",
    },
    {
      icon: Shield,
      title: "ICORR Aware",
      description:
        "Built around recognised coatings inspection and prep standards.",
    },
    {
      icon: Award,
      title: "Guaranteed Workmanship",
      description:
        "Guaranteed workmanship language backed by clear project scope.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-muted/30 overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container relative mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border-4 border-accent shadow-xl">
                <img
                  src={logoVan}
                  alt="Kirkhall coatings team vehicle"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Offset accent block */}
              <div className="hidden lg:block absolute -bottom-5 -right-5 w-full h-full rounded-lg border-2 border-accent/20 -z-10" />
              {/* Years badge */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 bg-primary text-primary-foreground px-5 py-3 rounded-lg shadow-lg z-10">
                <span className="block font-display text-2xl leading-none">30+</span>
                <span className="text-xs uppercase tracking-wider opacity-80">Years</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-accent" />
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-foreground mb-4 leading-tight">
                Coatings Specialists{" "}
                <span className="text-gold-gradient">You Can Trust</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                We deliver prep-led, top class workmanship
                across {displayArea}
              </p>
            </motion.div>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group flex gap-4"
                >
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <reason.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
