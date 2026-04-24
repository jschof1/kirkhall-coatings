import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Percent, Clock, Shield, Gift, Star, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { siteConfig } from "@/data/siteConfig";
import { formatPhoneNumber } from "@/lib/utils";

const WEBHOOK_URL = siteConfig.webhooks.discount;

const DiscountPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    summary: "",
  });
  
  // Urgency countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Recent claims counter (social proof)
  const [recentClaims] = useState(Math.floor(Math.random() * 5) + 12); // 12-16

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.summary.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formatPhoneNumber(formData.phone.trim()),
          summary: formData.summary.trim(),
          source: "discount-page",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      toast({
        title: "Request submitted!",
        description: "We'll be in touch soon with your discount.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-charcoal-gradient flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="text-center max-w-md bg-card p-10 border-2 border-gold"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <CheckCircle className="w-20 h-20 text-trust-green mx-auto mb-6" />
          </motion.div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-3">You're In!</h1>
          <p className="text-muted-foreground text-lg mb-6">
            We've received your request and will contact you shortly with your <span className="text-gold font-semibold">exclusive discount</span>.
          </p>
          <div className="bg-gold/10 border border-gold/30 p-4">
            <p className="text-sm text-muted-foreground">
              <Gift className="inline w-4 h-4 mr-2 text-gold" />
              Check your phone — we usually respond within 2 hours
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`Exclusive Discount ${siteConfig.seo.titleSuffix}`}
        noindex={true}
      />

      <div className="min-h-screen bg-charcoal-gradient flex items-start justify-center p-4 py-6 overflow-y-auto">
        <div className="w-full max-w-lg">
          {/* Urgency Banner */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-destructive text-white text-center py-2 px-4 mb-4 border-2 border-destructive"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-heading uppercase tracking-wide">
              <Clock className="w-3 h-3" />
              <span>Offer expires in:</span>
              <span className="font-mono font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* Main Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-card border-2 border-gold shadow-2xl overflow-hidden"
          >
            {/* Gold Header Strip */}
            <div className="bg-gold-rich py-4 px-6">
              <div className="flex items-center justify-center gap-3">
                <Percent className="w-8 h-8 text-gold-foreground" />
                <h1 className="text-2xl md:text-3xl font-display font-bold text-gold-foreground uppercase tracking-tight">
                  Secret VIP Discount
                </h1>
              </div>
            </div>

            {/* Social Proof Bar */}
            <div className="bg-charcoal text-white py-3 px-6 flex items-center justify-center gap-2 text-sm">
              <Users className="w-4 h-4 text-gold" />
              <span>
                <span className="font-bold text-gold">{recentClaims} people</span> claimed this offer today
              </span>
            </div>

            <div className="p-5 md:p-6">
              {/* Value Proposition */}
              <div className="text-center mb-4">
                <p className="text-muted-foreground text-sm mb-3">
                  You've unlocked <span className="font-semibold text-foreground">exclusive insider pricing</span> — not available to the public.
                </p>
                
                {/* Discount Badge */}
                <div className="inline-flex items-center gap-2 bg-gold/10 border-2 border-gold px-4 py-2">
                  <Gift className="w-4 h-4 text-gold" />
                  <span className="font-heading font-bold text-lg text-foreground">
                    Up to <span className="text-gold text-xl">15% OFF</span>
                  </span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { icon: Shield, text: "No Obligation" },
                  { icon: Star, text: "5-Star Rated" },
                  { icon: Clock, text: "Quick Response" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-2 bg-secondary/50 border border-border">
                    <item.icon className="w-4 h-4 text-gold mx-auto mb-0.5" />
                    <span className="text-[10px] text-muted-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-foreground font-semibold text-sm">Your Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11 bg-background border-2 border-muted focus:border-gold"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-foreground font-semibold text-sm">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your best contact number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-11 bg-background border-2 border-muted focus:border-gold"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="summary" className="text-foreground font-semibold text-sm">What do you need? *</Label>
                  <Textarea
                    id="summary"
                    placeholder="e.g., living room repaint, exterior painting..."
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    rows={2}
                    className="resize-none bg-background border-2 border-muted focus:border-gold text-sm"
                  />
                </div>

                {/* CTA Button with Animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="gold-pulse"
                      size="lg"
                      className="w-full text-lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            ⏳
                          </motion.span>
                          Securing Your Discount...
                        </span>
                      ) : (
                        <>
                          Claim My Discount Now
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </AnimatePresence>

                {/* Micro-commitment text */}
                <p className="text-xs text-muted-foreground text-center">
                  🔒 Your details are secure. We'll only use them to send your exclusive quote.
                </p>
              </form>
            </div>

            {/* Footer Trust Bar */}
            <div className="bg-secondary/50 border-t border-border py-3 px-4">
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="ml-1">4.9/5 Rating</span>
                </span>
                <span className="text-border">|</span>
                <span>100+ Happy Customers</span>
              </div>
            </div>
          </motion.div>

          {/* Scarcity Note */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-white/60 text-sm mt-4"
          >
            ⚠️ Limited availability — only 3 discount slots remaining this week
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default DiscountPage;
