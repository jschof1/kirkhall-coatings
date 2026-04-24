import { useState, useEffect } from "react";
import { ChevronRight, Loader2, Phone, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPhoneNumber } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import heroImg from "@/assets/kirkhall/kirkhall-hero-external-wall-coating-16x9.jpeg";
import googleLogo from "@/assets/icons/certifications/google-g-logo.svg";

interface HeroProps {
  areaName?: string;
  description?: string;
}

const Hero = ({ areaName }: HeroProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    postcode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [quotesThisWeek, setQuotesThisWeek] = useState(0);

  // Subtle social-proof: randomise a realistic "quotes this week" number once
  useEffect(() => {
    setQuotesThisWeek(Math.floor(Math.random() * 6) + 7); // 7-12
  }, []);

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
          source: "website_hero_form",
          area: areaName || siteConfig.serviceArea.primary,
        }),
      });

      if (response.ok) {
        toast.success("Thank you! We'll be in touch within 24 hours.");
        setFormData({ name: "", phone: "", product: "", postcode: "" });
        setShowForm(false);
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
    <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-[calc(100svh-5rem)] flex items-start pt-20 sm:items-center sm:pt-0 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Kirkhall team applying external wall coating"
          className="w-full h-full object-cover object-[15%_center]"
        />
        {/* Stronger overlay on mobile for text readability, lighter on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/70 md:bg-gradient-to-r md:from-background md:via-background/20 md:to-background/10" />
        <div className="absolute inset-0 texture-forge opacity-30 pointer-events-none" />
      </div>
      
      {/* Subtle accent — hidden on mobile to avoid overlapping content */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/4 z-0 hidden md:block" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-0 pb-6 sm:py-16 md:py-32 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Trust + rating strip */}
              {/* Mobile: compact trust cues, sm+: full strip with text and border */}
              <div className="flex items-center gap-2 mb-3 sm:inline-flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:mb-6 sm:rounded-lg sm:border sm:border-accent/40 sm:bg-accent/10 sm:px-4 sm:py-2 sm:shadow-sm sm:backdrop-blur-md">
                <div className="flex items-center gap-2 sm:gap-3">
                  <img src={googleLogo} alt="Google" className="h-5 sm:h-7 w-auto" />
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 stroke-black" />
                    ))}
                  </div>
                  <span className="hidden sm:inline text-sm font-semibold text-foreground">
                    ICORR Aware Team, Timeserved, Guaranteed Workmanship
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-display text-[2.25rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-8xl text-foreground leading-[1.05] mb-3 sm:mb-6 tracking-tight">
                External Wall &
                <span className="block text-accent">Roof Coatings</span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 sm:mb-8 leading-relaxed max-w-xl">
                Timeserved coatings specialists delivering external wall coatings, roof refurbishment,
                and uPVC spraying across {displayArea} and surrounding areas.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-3 sm:mb-4">
                <Dialog open={showForm} onOpenChange={setShowForm}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 sm:px-10 h-12 sm:h-14 text-base sm:text-lg shadow-lg shadow-accent/20 transition-all hover:scale-[1.03] active:scale-100"
                    >
                      Get Your Free Quote
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[450px] p-0 border-2 border-navy overflow-hidden max-h-[90svh] overflow-y-auto">
                    <div className="bg-accent text-accent-foreground text-xs sm:text-sm font-bold px-4 py-2 text-center">
                      Limited Availability — Book Your Free Quote Today
                    </div>
                    <div className="p-5 sm:p-8">
                      <DialogHeader className="mb-4 sm:mb-6">
                        <DialogTitle className="font-display text-2xl sm:text-4xl text-foreground mb-2">
                          Get Your Free Quote
                        </DialogTitle>
                        <p className="text-muted-foreground text-base">
                          Takes 30 seconds — we call you back within 24 hours
                        </p>
                      </DialogHeader>
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-13 text-base"
                        />
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="h-13 text-base"
                        />
                        <Select
                          value={formData.product}
                          onValueChange={(value) => setFormData({ ...formData, product: value })}
                        >
                          <SelectTrigger className="h-13 text-base">
                            <SelectValue placeholder="Service Required" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="external-wall-coatings">External Wall Coatings</SelectItem>
                            <SelectItem value="roof-refurbishment">Roof Refurbishment</SelectItem>
                            <SelectItem value="upvc-spraying">uPVC Window & Door Spraying</SelectItem>
                            <SelectItem value="other">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          placeholder="Postcode (Optional)"
                          value={formData.postcode}
                          onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                          className="h-13 text-base"
                        />
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg shadow-md shadow-accent/20 transition-all hover:scale-[1.02] active:scale-100"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Get My Free Quote
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </>
                          )}
                        </Button>
                      </form>
                      <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Details never shared
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          No obligation
                        </span>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-accent-contrast font-bold h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg transition-all backdrop-blur-lg bg-navy/55 text-white hover:bg-navy/70"
                >
                  <a href={getPhoneLink()}>
                    <Phone className="w-5 h-5 mr-3" />
                    {siteConfig.contact.phone}
                  </a>
                </Button>
              </div>

              {/* Micro-copy below CTA — urgency + reassurance */}
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                <span className="text-accent font-semibold">{quotesThisWeek} quotes requested</span> this week
                <span className="mx-1.5 sm:mx-2">·</span>
                No obligation, 100% free
              </p>

              {/* Trust micro-icons */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-5 text-xs sm:text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                  ICORR Aware
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                  Timeserved Workforce
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 stroke-black" />
                  Guaranteed Workmanship
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right - Quick Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-card border-2 border-navy p-8 shadow-lg relative overflow-hidden">
              {/* Urgency ribbon */}
              <div className="bg-accent text-accent-foreground text-sm font-bold px-4 py-2 text-center -mx-8 -mt-8 mb-7">
                Limited Availability — Book Your Free Quote Today
              </div>

              <h2 className="font-display text-4xl text-foreground mb-2">
                Get Your Free Quote
              </h2>
              <p className="text-muted-foreground text-base mb-6">
                Takes 30 seconds — we call you back within 24 hours
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-13 text-base"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-13 text-base"
                />
                <Select
                  value={formData.product}
                  onValueChange={(value) => setFormData({ ...formData, product: value })}
                >
                  <SelectTrigger className="h-13 text-base">
                    <SelectValue placeholder="Service Required" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="external-wall-coatings">External Wall Coatings</SelectItem>
                    <SelectItem value="roof-refurbishment">Roof Refurbishment</SelectItem>
                    <SelectItem value="upvc-spraying">uPVC Window & Door Spraying</SelectItem>
                    <SelectItem value="other">Not Sure Yet</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Postcode (Optional)"
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  className="h-13 text-base"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg shadow-md shadow-accent/20 transition-all hover:scale-[1.02] active:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Free Quote
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
              </form>

              {/* Trust signals under form */}
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Details never shared
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  No obligation
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Slide-in Form Removed in favor of Dialog */}
    </section>
  );
};

export default Hero;
