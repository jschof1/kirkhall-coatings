import { Shield, Clock, Award, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const TrustBar = () => {
  const trustItems = [
    { icon: Shield, text: "ICORR Aware", subtext: "Coatings inspection standards" },
    { icon: Users, text: "Timeserved Team", subtext: "Experienced workforce" },
    { icon: Award, text: "Top Class Workmanship", subtext: "Quality-first delivery" },
    { icon: Clock, text: "Guaranteed Workmanship", subtext: "Backed project scope" },
  ];

  return (
    <section className="py-10 md:py-12 bg-primary border-y-2 border-gold">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 lg:gap-16">
          {/* Trust Items */}
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-accent/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="font-bold text-primary-foreground text-sm block">
                  {item.text}
                </span>
                <span className="text-primary-foreground/60 text-xs">
                  {item.subtext}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Divider */}
          <div className="hidden lg:block w-px h-10 bg-primary-foreground/20" />

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <div>
              <span className="font-bold text-primary-foreground text-sm block">5.0 Rating</span>
              <span className="text-primary-foreground/60 text-xs">100+ Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
