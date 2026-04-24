import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Phone, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Award, 
  Star, 
  MapPin, 
  ArrowRight, 
  PoundSterling, 
  Zap, 
  Info, 
  MessageCircle, 
  ShieldCheck, 
  Map,
  ChevronRight,
  Loader2,
  Navigation,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { formatPhoneNumber } from "@/lib/utils";

// Image Imports
import heroBg from "@/assets/photos/hero-bg.webp";

import { services, getServiceBySlug, getRelatedServices } from "../data/services";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    // ... implementation ...
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
      const response = await fetch(
        siteConfig.webhooks.contact,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            phone: formatPhoneNumber(formData.phone.trim()),
            product: service.title,
            postcode: formData.postcode.trim(),
            source: "service_page_hero_form",
          }),
        }
      );

      if (response.ok) {
        toast.success("Thank you! We'll be in touch within 24 hours.");
        setFormData({ name: "", phone: "", email: "", postcode: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const relatedServices = getRelatedServices(service.relatedServices);
  const heroImage = service.image;

  const trustStats = [
    { icon: Clock, text: "Fast Start" },
    { icon: Shield, text: "Quality Guaranteed" },
    { icon: Award, text: "Family Run" },
    { icon: Sparkles, text: "Premium Finish" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const stampVariants = {
    hidden: { opacity: 0, y: -20, scale: 1.05 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const faqSchema = service.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      }
    : null;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "description": service.metaDescription,
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": siteConfig.business.name
      },
      "areaServed": service.areas.map(area => ({ "@type": "Place", "name": area })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pricing",
        "itemListElement": service.pricing.map(p => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": p.service
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": p.price.replace(/[^0-9.]/g, ""), // Extract numeric estimate
            "priceCurrency": "GBP"
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kirkhall-wall-coatings.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://kirkhall-wall-coatings.co.uk/services" },
        { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://kirkhall-wall-coatings.co.uk/${service.slug}` }
      ]
    },
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://kirkhall-wall-coatings.co.uk/${service.slug}`}
        type="service"
        schema={schemas}
        image={service.image}
      />

      <ScrollProgress />
      <TopBanner />
      <Header />
      <PromoBanner />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-4 md:pt-8 px-4 md:px-8 lg:px-12 min-h-[60vh] md:min-h-[85vh] flex items-center overflow-hidden bg-charcoal">
          {/* Gold radial accent in corner */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-radial pointer-events-none opacity-30" />
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/90" />
          </div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 pattern-grid opacity-10" />
          
          <div className="max-w-none w-full mx-auto px-4 md:px-12 relative z-10 py-8 md:py-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center lg:text-left lg:col-span-6"
              >
                {/* Gold accent line */}
                <motion.div 
                  variants={stampVariants}
                  className="hidden lg:block w-20 h-1 bg-gold mb-4 shadow-industrial-gold"
                />

                {/* Breadcrumbs */}
                <motion.nav variants={stampVariants} className="flex items-center justify-center lg:justify-start gap-2 text-white/80 text-sm mb-8 font-heading font-bold uppercase tracking-widest">
                  <Link to="/" className="hover:text-gold transition-colors">Home</Link>
                  <span className="text-white/40">/</span>
                  <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
                  <span className="text-white/40">/</span>
                  <span className="text-gold">{service.title}</span>
                </motion.nav>

                {/* Main Headline */}
                <motion.h1
                  variants={stampVariants}
                  className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-7xl text-white leading-[1.1] mb-6 md:mb-8 tracking-industrial font-black"
                >
                  {service.title.split(' ')[0]}{" "}
                  <span className="relative inline-block text-gold-gradient px-1 font-display">
                    {service.title.split(' ').slice(1).join(' ') || "Specialists"}
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                      className="absolute -bottom-2 left-0 h-1.5 bg-gold shadow-industrial-gold"
                    />
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={stampVariants}
                  className="text-base md:text-2xl text-white mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-body font-medium"
                >
                  {service.heroDescription}
                </motion.p>

                {/* Mobile CTA */}
                <motion.div variants={stampVariants} className="lg:hidden mb-8">
                  <Button
                    asChild
                    variant="gold"
                    size="lg"
                    className="w-full shadow-industrial-gold rounded-none"
                  >
                    <a href={getPhoneLink()} className="flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5" strokeWidth={2.5} />
                      CALL FOR INSTANT QUOTE
                    </a>
                  </Button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  variants={stampVariants}
                  className="flex flex-wrap justify-center lg:justify-start gap-5 mb-12"
                >
                  {[
                    { icon: Shield, text: "QUALITY GUARANTEED" },
                    { icon: Clock, text: "FAST START" },
                  ].map((badge, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-charcoal border-2 border-gold/40 px-5 py-3.5 hover:border-gold hover:shadow-industrial-gold transition-all duration-300 group shadow-industrial-sm rounded-none cursor-default"
                    >
                      <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <badge.icon 
                          className="w-5 h-5 text-gold" 
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-white text-sm font-heading font-bold tracking-widest">
                        {badge.text}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center gap-4 bg-charcoal border-2 border-gold/40 px-5 py-3.5 hover:border-gold hover:shadow-industrial-gold transition-all duration-300 shadow-industrial-sm rounded-none cursor-default">
                    <span className="text-gold font-display text-3xl leading-none font-black">30</span>
                    <span className="text-white text-sm font-heading font-bold tracking-widest">YEARS EXP</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right - Premium Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="lg:pl-0 lg:col-span-6 lg:-mt-12"
              >
                <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
                  <div className="relative bg-white border-2 border-charcoal p-5 sm:p-8 md:p-10 shadow-[4px_4px_0_0_hsl(var(--gold))] md:shadow-[8px_8px_0_0_hsl(var(--gold))] rounded-none w-full">
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gold shadow-industrial-gold" />
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/50" />
                    <div className="absolute bottom-0 left-8 w-12 h-12 border-b-2 border-l-2 border-gold/50" />

                    <div className="relative">
                      <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl text-charcoal mb-3 tracking-tighter text-balance uppercase">
                        FREE {service.title} QUOTE
                      </h2>
                      <p className="text-charcoal/80 mb-10 font-body font-bold uppercase tracking-[0.2em] text-xs">
                        No-obligation survey and quotation
                      </p>

                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input
                          placeholder="Your Name"
                          className="bg-cream-warm/30 border-2 border-charcoal/10 text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded-none h-12 font-body"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          className="bg-cream-warm/30 border-2 border-charcoal/10 text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded-none h-12 font-body"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                        <Input
                          placeholder="Postcode"
                          className="bg-cream-warm/30 border-2 border-charcoal/10 text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded-none h-12 font-body"
                          value={formData.postcode}
                          onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        />

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          variant="gold"
                          size="xl"
                          className="w-full shadow-industrial-gold mt-4 rounded-none"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                              SENDING...
                            </>
                          ) : (
                            <>
                              REQUEST FREE QUOTE
                              <ChevronRight className="w-6 h-6 ml-1" strokeWidth={3} />
                            </>
                          )}
                        </Button>
                      </form>
                      <p className="text-center text-charcoal/50 text-[10px] mt-6 font-heading font-bold uppercase tracking-[0.2em]">
                        🔒 Your details are secure and never shared
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
        </section>

        {/* Trust Bar */}
        <section className="py-8 bg-charcoal-gradient relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 divider-gold" />
          <div className="absolute bottom-0 left-0 right-0 divider-gold" />
          <div className="absolute inset-0 texture-forge opacity-10" />
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {trustStats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 hover-shake transition-transform duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold/20 border-2 border-gold/50 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/30 transition-all">
                    <item.icon className="w-5 h-5 text-gold" strokeWidth={2} />
                  </div>
                  <span className="font-heading font-bold text-white uppercase tracking-wide text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-14 md:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <ScrollReveal variant="fade-right">
                <div className="relative">
                  <span className="inline-block text-gold font-heading font-bold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 bg-gold/10 border-2 border-gold/30 shadow-industrial-sm">
                    Expert Solutions
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight tracking-industrial font-black uppercase">
                    Professional <br /><span className="text-gold-gradient">{service.title}</span>
                  </h2>
                  <div className="w-20 h-1.5 bg-gold mb-8" />
                  <div className="space-y-6 text-xl text-charcoal leading-relaxed mb-10 font-body">
                    {service.fullDescription.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white p-5 border-2 border-charcoal/10 group hover:border-gold/50 transition-all shadow-sm">
                        <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-gold" />
                        </div>
                        <span className="font-heading font-bold text-charcoal text-sm uppercase tracking-wide">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-left">
                <div className="relative">
                  <Card className="border-2 border-charcoal shadow-industrial-gold overflow-hidden rounded-none">
                    <CardContent className="p-0">
                      <div className="bg-charcoal p-10 text-white relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <h3 className="font-display text-4xl mb-6 tracking-wide uppercase italic">Quality Guaranteed</h3>
                        <p className="text-white mb-8 font-body text-lg">We take pride in every project. Our goal is to provide a long-lasting coating solution, not just a quick cosmetic fix.</p>
                        <div className="space-y-4">
                          {[
                            "Workmanship Guarantee",
                            "Professional Finish",
                            "Fully Insured (£2M Liability)",
                            "Clean & Tidy Work Ethics"
                          ].map((text, i) => (
                            <div key={i} className="flex items-center gap-4">
                              <ShieldCheck className="w-6 h-6 text-gold" />
                              <span className="font-heading font-bold uppercase tracking-widest text-sm">{text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gold p-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                        <div>
                          <p className="text-gold-foreground/80 font-heading font-bold uppercase tracking-[0.2em] text-xs mb-1">Response Time</p>
                          <p className="text-charcoal font-display font-black text-4xl tracking-tighter">60 MINS</p>
                        </div>
                        <div className="hidden sm:block h-12 w-0.5 bg-charcoal/10" />
                        <Button asChild variant="default" size="xl" className="bg-charcoal hover:bg-charcoal-light text-white font-heading font-bold uppercase tracking-widest rounded-none w-full sm:w-auto">
                          <a href={getPhoneLink()}>Call Now</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32 bg-secondary relative overflow-hidden border-y-2 border-charcoal/5">
          <div className="absolute inset-0 pattern-grid opacity-5 pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-16 md:mb-20">
                <span className="inline-block text-gold font-heading font-bold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 bg-gold/10 border-2 border-gold/30 shadow-industrial-sm">
                  <PoundSterling className="w-4 h-4 inline-block mr-2 mb-0.5" />
                  Transparent Pricing
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight tracking-industrial font-black uppercase">
                  {service.title.split(' ')[0]} <span className="text-gold-gradient">Service Pricing</span>
                </h2>
                <div className="w-20 h-1.5 bg-gold mx-auto mb-8" />
                <p className="text-charcoal text-xl max-w-2xl mx-auto font-body">
                  No hidden fees. No surprise charges. We believe in honest, upfront pricing for all our {siteConfig.address.city} and {siteConfig.serviceArea.regions[0]} customers.
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <ScrollReveal variant="zoom-in">
                <div className="bg-white rounded-none shadow-industrial border-2 border-charcoal overflow-hidden">
                  <div className="grid divide-y-2 divide-charcoal/5">
                    {service.pricing.map((item, i) => (
                      <div key={i} className="p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-secondary/30 transition-colors group relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-start gap-6">
                          <div className="w-14 h-14 bg-charcoal rounded-none flex items-center justify-center border-2 border-gold/30 group-hover:border-gold transition-all duration-300 shrink-0">
                            <service.icon className="w-7 h-7 text-gold" />
                          </div>
                          <div>
                            <h4 className="font-display text-2xl text-charcoal mb-2 tracking-wide uppercase">{item.service}</h4>
                            <p className="text-charcoal font-body">{item.note || "Professional quality guaranteed"}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end gap-10">
                          <div className="text-right">
                            <div className="text-charcoal font-display font-black text-4xl tracking-tighter">{item.price}</div>
                            <div className="text-[10px] font-heading font-bold uppercase tracking-widest text-gold-dark">Estimate</div>
                          </div>
                          <Button asChild variant="outline" className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-heading font-bold uppercase tracking-widest rounded-none h-14 px-8">
                            <a href={getPhoneLink()}>Enquire</a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-charcoal p-6 text-center border-t-2 border-gold/50">
                    <p className="text-white/60 text-[10px] font-heading font-bold uppercase tracking-[0.3em]">
                      * Prices are estimated. Final quotes provided on-site after a full assessment.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal relative overflow-hidden">
          <div className="absolute inset-0 texture-forge opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 divider-gold" />
          <div className="absolute bottom-0 left-0 right-0 divider-gold" />

          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-16 md:mb-20">
                <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-6" />
                <h2 className="font-display text-5xl md:text-7xl text-white mb-8 tracking-industrial uppercase">
                  Our <span className="text-gold-gradient">Proven</span> Process
                </h2>
                <p className="text-white text-xl max-w-2xl mx-auto leading-relaxed font-body">
                  We've refined our workflow to ensure every {service.title.toLowerCase()} project is completed to the highest standard.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {service.process.map((step, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 150}>
                  <div className="h-full relative bg-white border-2 border-charcoal/10 hover:border-gold/50 transition-all duration-300 p-10 group overflow-hidden shadow-sm hover:shadow-industrial-gold">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-light via-gold to-gold-dark" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/30 group-hover:border-gold transition-colors" />
                    
                    <div className="relative">
                      <div className="w-20 h-20 bg-charcoal border-2 border-gold/30 flex items-center justify-center mb-8 group-hover:border-gold transition-all">
                        <step.icon className="w-10 h-10 text-gold" />
                      </div>
                      <div className="inline-block px-4 py-1.5 border-2 border-gold/30 bg-charcoal text-gold text-xs font-heading font-bold uppercase tracking-widest mb-6">
                        Step 0{i + 1}
                      </div>
                      <h3 className="text-2xl font-display text-charcoal mb-4 group-hover:text-gold transition-colors uppercase tracking-wide">{step.title}</h3>
                      <p className="text-charcoal leading-relaxed font-body text-lg">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Local Coverage Section */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden border-t-2 border-charcoal/5">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <ScrollReveal variant="fade-right" className="lg:col-span-7">
                <div className="relative group">
                  <div className="relative rounded-none overflow-hidden shadow-industrial border-2 border-charcoal">
                    <div className="relative h-[500px] lg:h-[600px]">
                      <img src={heroBg} alt={`${siteConfig.address.city} Area Coverage`} className="w-full h-full object-cover grayscale opacity-40" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal/60 to-transparent flex items-center justify-center p-12">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gold rounded-none flex items-center justify-center mx-auto mb-8 shadow-industrial-gold">
                            <Map className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-4xl font-display font-black text-white mb-4 tracking-wide uppercase italic">Fast Local Arrival</h3>
                          <p className="text-gold font-heading font-bold uppercase tracking-[0.3em] text-sm">North Lanarkshire & Glasgow Covered</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-charcoal border-t-2 border-gold/50">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-gold rounded-none flex items-center justify-center shadow-industrial-gold shrink-0">
                          <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="font-display text-2xl text-white mb-1 tracking-wide uppercase">Local Decorators</h4>
                          <p className="text-gold-light/80 font-heading font-bold uppercase tracking-widest text-xs">Strategically Based for Quick Service</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-left" className="lg:col-span-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-gold/10 border-2 border-gold/30 text-gold-dark text-sm font-heading font-bold uppercase tracking-widest mb-8 shadow-industrial-sm">
                    <Navigation className="w-4 h-4" />
                    Local Coverage
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight tracking-industrial font-black uppercase">
                    Serving <br /><span className="text-gold-gradient">North Lanarkshire & Glasgow</span>
                  </h2>
                  <div className="w-20 h-1.5 bg-gold mb-8" />
                  <p className="text-charcoal text-xl leading-relaxed mb-10 font-body">
                    We have specialists strategically based across {siteConfig.serviceArea.regions.join(' and ')} to ensure we can reach your property quickly, regardless of your location.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.areas.map((area, i) => (
                      <Link 
                        key={i} 
                        to={`/${area.toLowerCase().replace(' ', '-')}`}
                        className="px-5 py-3 bg-white hover:bg-charcoal hover:text-white transition-all text-charcoal text-sm rounded-none font-heading font-bold uppercase tracking-wider border-2 border-charcoal/10 hover:border-charcoal shadow-sm hover:shadow-industrial-sm"
                      >
                        {area}
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-32 bg-secondary relative overflow-hidden border-y-2 border-charcoal/5">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-16 md:mb-20">
                <span className="inline-block text-gold font-heading font-bold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 bg-gold/10 border-2 border-gold/30 shadow-industrial-sm">
                  FAQ
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight tracking-industrial font-black uppercase">
                  Common <span className="text-gold-gradient">Questions</span>
                </h2>
                <div className="w-20 h-1.5 bg-gold mx-auto mb-8" />
                <p className="text-charcoal text-xl max-w-2xl mx-auto font-body">
                  Got questions about {service.title.toLowerCase()}? Here are the answers to the most common queries.
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <ScrollReveal key={index} variant="fade-up" delay={index * 100}>
                    <AccordionItem 
                      value={`faq-${index}`}
                      className="bg-white border-2 border-charcoal/10 rounded-none px-8 data-[state=open]:shadow-industrial-gold data-[state=open]:border-gold/50 transition-all hover:border-gold/30 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gold opacity-0 data-[state=open]:opacity-100 transition-opacity shadow-industrial-gold" />
                      <AccordionTrigger className="text-left font-display text-xl text-charcoal hover:text-gold hover:no-underline py-6 group tracking-wide uppercase">
                        <div className="flex items-center gap-6">
                          <div className="w-10 h-10 bg-charcoal border border-gold/30 flex items-center justify-center text-gold group-data-[state=open]:bg-gold group-data-[state=open]:text-white transition-all shrink-0">
                            <MessageCircle className="w-5 h-5" />
                          </div>
                          {faq.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-charcoal text-lg pb-8 pl-16 border-t-2 border-charcoal/5 mt-2 pt-6 font-body leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </ScrollReveal>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
              <ScrollReveal variant="fade-up">
                <div className="w-16 h-1 bg-gold mx-auto mb-6" />
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight tracking-industrial font-black uppercase">
                  Other <span className="text-gold-gradient italic">Expert Services</span>
                </h2>
              </ScrollReveal>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedServices.map((related, i) => (
                  <ScrollReveal key={related.slug} variant="fade-up" delay={i * 150}>
                    <Link to={`/${related.slug}`} className="group block h-full">
                      <Card className="h-full border-2 border-charcoal/10 hover:border-gold/50 transition-all duration-500 shadow-sm hover:shadow-industrial-gold overflow-hidden rounded-none text-left bg-white relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative h-56 overflow-hidden">
                          <img 
                            src={related.image} 
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                          <div className="absolute bottom-6 left-6">
                            <div className="bg-gold p-3 shadow-industrial-gold">
                              <related.icon className="w-6 h-6 text-charcoal" />
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-8">
                          <h3 className="font-display text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors uppercase tracking-wide">
                            {related.title}
                          </h3>
                          <p className="text-charcoal text-base mb-8 leading-relaxed font-body">
                            {related.shortDesc}
                          </p>
                          <span className="text-charcoal font-heading font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all border-b-2 border-gold/30 pb-1 w-fit group-hover:border-gold">
                            Explore Service <ArrowRight className="w-4 h-4 text-gold" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <FinalCTA />
      </main>

      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default ServiceDetailPage;
