import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone } from "lucide-react";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface FAQProps {
  areaName?: string;
}

const FAQ = ({ areaName }: FAQProps) => {
  const displayArea = areaName || "Motherwell";
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Do you offer free quotes?",
      answer: `Yes. We provide free, no-obligation quotes across ${displayArea}, North Lanarkshire and Glasgow with a clear written scope.`,
    },
    {
      question: "What does your external wall coating process involve?",
      answer:
        "We repair loose damage, apply biocide/sealer as required, then apply a minimum of two masonry coating coats for durable weather protection.",
    },
    {
      question: "Can you prioritise uPVC windows on a spraying project?",
      answer:
        "Yes. Many jobs lead with front elevation windows and doors, then we align fascias, soffits, and garage doors for a consistent finish.",
    },
    {
      question: "Can you spray uPVC windows and doors?",
      answer:
        "Absolutely. Our uPVC spraying service restores faded frames and doors with specialist coatings and controlled preparation.",
    },
    {
      question: "What trust standards do you work to?",
      answer:
        "Our messaging is built around ICORR-aware process standards, a timeserved workforce, top class workmanship, and guaranteed workmanship.",
    },
    {
      question: "Which areas do you cover?",
      answer:
        "We cover Motherwell, North Lanarkshire and Glasgow. If you are nearby, contact us and we will confirm coverage quickly.",
    },
    {
      question: "How quickly can you respond?",
      answer:
        "Most enquiries receive a response within 24 hours, with surveys arranged around property access and weather-dependent scheduling.",
    },
  ];

  return (
    <section id="faq" className="py-14 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-16">
          {/* Left - Sticky Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest mb-3 md:mb-6">
              FAQ
            </span>
            <h2 className="font-display text-section text-foreground mb-3 md:mb-6 brush-underline">
              Got Questions?
              <br />
              <span className="text-gold-gradient">We've Got Answers.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-5 md:mb-8 leading-relaxed">
              Everything you need to know about our wall coatings and uPVC window and door spraying services.
              Can't find what you're looking for? Get in touch.
            </p>
            <Button asChild variant="paint" size="lg">
              <a href={getPhoneLink()}>
                <Phone className="w-5 h-5 mr-2" />
                Speak to a Specialist
              </a>
            </Button>
          </motion.div>

          {/* Right - FAQ Items */}
          {/* Right - FAQ Items */}
          <div className="lg:col-span-3 space-y-2.5 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div 
                  className={cn(
                    "border-2 transition-all duration-300",
                    openIndex === index 
                      ? "border-accent bg-card shadow-soft" 
                      : "border-border bg-card hover:border-accent/50"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-start justify-between gap-3 p-4 md:p-6 text-left"
                  >
                    <span className={cn(
                      "font-display text-base md:text-lg font-bold transition-colors",
                      openIndex === index ? "text-accent" : "text-foreground"
                    )}>
                      {faq.question}
                    </span>
                    <div className={cn(
                      "w-7 h-7 md:w-8 md:h-8 flex-shrink-0 flex items-center justify-center transition-all",
                      openIndex === index ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"
                    )}>
                      {openIndex === index ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0">
                          <div className="w-full h-px bg-border mb-4" />
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
