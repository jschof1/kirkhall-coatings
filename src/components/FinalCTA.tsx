import { useState } from "react";
import { Phone, ChevronRight, Loader2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { toast } from "sonner";
import { formatPhoneNumber } from "@/lib/utils";

interface FinalCTAProps {
  areaName?: string;
}

const FinalCTA = ({ areaName }: FinalCTAProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    postcode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    if (!siteConfig.webhooks.contact) {
      toast.error("Please contact us via email or phone");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(siteConfig.webhooks.contact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formatPhoneNumber(formData.phone.trim()),
          product: formData.product,
          postcode: formData.postcode.trim(),
          source: "website_final_cta_form",
          area: areaName || siteConfig.serviceArea.primary,
        }),
      });

      if (response.ok) {
        toast.success("Thank you! We'll be in touch within 24 hours.");
        setFormData({ name: "", phone: "", product: "", postcode: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayArea = areaName || siteConfig.serviceArea.primary;
  
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent-contrast font-bold text-sm uppercase tracking-widest mb-4">
              Get in Touch
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-6xl text-white mb-6">
              Ready to Transform
              <span className="block font-display outline-text-solid-white text-accent-contrast font-bold">Your Space?</span>
            </h2>

            <p className="text-lg text-on-dark-muted mb-8 max-w-lg">
              Get expert advice on wall coatings and refurbishment for your {displayArea} home.
              We'll provide a free, no-obligation quote.
            </p>

            {/* Phone CTA */}
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-4 group mb-8"
            >
              <div className="w-14 h-14 bg-accent flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-on-dark-subtle text-sm mb-1">Call us today</p>
                <p className="font-display text-2xl text-white group-hover:text-accent-contrast transition-colors">
                  {siteConfig.contact.phone}
                </p>
              </div>
            </a>

            {/* Trust points */}
            <div className="flex flex-wrap gap-4 text-sm text-on-dark-muted">
              <span>30+ Years Experience</span>
              <span>•</span>
              <span>Fully Insured</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5"><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />5/5 on Google & Checkatrade</span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white/10 border border-white/25 p-8">
              <h3 className="font-display text-2xl text-white mb-2">
                Get Your Free Quote
              </h3>
              <p className="text-on-dark-muted text-sm mb-6">
                We'll call you back within 24 hours
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Select
                  value={formData.product}
                  onValueChange={(value) => setFormData({ ...formData, product: value })}
                >
                  <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Service Required" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="external-wall-coatings">External Wall Coatings</SelectItem>
                    <SelectItem value="wall-repairs-sealing-prep">Wall Repairs & Prep</SelectItem>
                    <SelectItem value="upvc-spraying">uPVC Window & Door Spraying</SelectItem>
                    <SelectItem value="other">Not Sure Yet</SelectItem>
                  </SelectContent>
                </Select>
                <Input 
                  placeholder="Postcode (Optional)" 
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Phone className="w-4 h-4 mr-2" />
                      Get Free Estimate
                    </>
                  )}
                </Button>
              </form>

              <p className="text-center text-white/50 text-xs mt-4">
                Your details are secure and never shared
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
