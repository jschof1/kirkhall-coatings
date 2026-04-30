import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import TrustBar from "@/components/TrustBar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services } from "../data/services";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { 
  Phone, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Award, 
  Star, 
  ArrowRight, 
  Ruler, 
  ShieldCheck, 
  Home,
  Zap,
  MapPin,
  ChevronRight
} from "lucide-react";

// Image Imports
import heroBg from "@/assets/kirkhall/kirkhall-hero-external-wall-coating-16x9.jpeg";
import coverageHeroBg from "@/assets/kirkhall/kirkhall-trust-team-workmanship-4x3.jpeg";
import logo from "@/assets/branding/kirkhall-logo-mark.svg";

// Certification / trust imports
import checkatradeLogo from "@/assets/icons/certifications/checkatrade.png";
import googleLogo from "@/assets/icons/certifications/google-g-logo.svg";

const ServicesPage = () => {
  const trustStats = [
    { value: "100+", label: "Projects", icon: CheckCircle2 },
    { value: "100%", label: "Satisfaction", icon: Star },
    { value: "15yr", label: "Experience", icon: Shield },
    { value: "5 Star", label: "Rated", icon: Award },
  ];

  const steps = [
    { 
      title: "Free Survey", 
      desc: "We visit your home to measure, discuss styles, and provide expert advice on the best solutions.",
      icon: Ruler 
    },
    { 
      title: "Bespoke Quote", 
      desc: "Receive a detailed, no-obligation quote tailored to your property and requirements.",
      icon: Home 
    },
    { 
      title: "Expert Finish", 
      desc: "Professional work by our experienced team, with a perfect finish and full clean-up.",
      icon: ShieldCheck 
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services | Kirkhall Wall Coatings"
        description="External wall coatings and uPVC window and door spraying across Motherwell, North Lanarkshire, and Glasgow."
        canonical="https://kirkhall-wall-coatings.co.uk/services"
      />

      <ScrollProgress />
      <TopBanner />
      <Header />
      <PromoBanner />
      
      <main>
        {/* Hero Section */}
        <section className="relative px-4 md:px-8 lg:px-12 min-h-[50vh] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg}
              alt="Premium External Wall Coating Solutions"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/95" />
          </div>

          <div className="absolute inset-0 pattern-grid opacity-10" />
          
          <div className="max-w-7xl w-full mx-auto relative z-10 py-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-12 h-0.5 bg-gold mb-5 mx-auto"
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2.5 bg-charcoal-light/80 border border-gold/30 px-4 py-1.5 mb-5"
              >
                <img src={logo} alt="Kirkhall Wall Coatings" className="w-5 h-5 invert brightness-0 opacity-80" />
                <span className="text-white/90 text-xs font-heading font-bold uppercase tracking-[0.2em]">
                  Coatings specialists - 20+ years experience
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-5 tracking-tight uppercase"
              >
                External Wall <br />
                <span className="text-gold-gradient relative inline-block">
                  Wall & uPVC Window Specialists
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -bottom-0.5 left-0 h-0.5 bg-gold" 
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed font-body"
              >
                Prep-first coating systems for external walls and uPVC windows, doors, and trims across North Lanarkshire and Glasgow.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <Button asChild variant="gold" size="lg" className="rounded-none h-12 px-8 text-sm font-black uppercase tracking-widest">
                  <a href={getPhoneLink()} className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4" strokeWidth={3} />
                    GET FREE QUOTE
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white/80 text-white hover:bg-white hover:text-charcoal rounded-none h-12 px-8 text-sm font-bold uppercase tracking-widest">
                  <a href="#services-grid">EXPLORE SERVICES</a>
                </Button>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
        </section>

        {/* Quick Trust Stats Bar */}
        <section className="py-6 bg-charcoal-gradient relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 divider-gold" />
          <div className="absolute bottom-0 left-0 right-0 divider-gold" />
          
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {trustStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-gold/15 border border-gold/40 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/25 transition-all">
                    <stat.icon className="w-4 h-4 text-gold" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-display font-black text-lg text-white leading-none mb-0.5 uppercase tracking-tight">{stat.value}</div>
                    <div className="text-gold-light/50 font-heading font-bold text-[10px] uppercase tracking-[0.15em]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="services-grid" className="py-16 md:py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <ScrollReveal variant="fade-up">
              <div className="text-center mb-12 max-w-2xl mx-auto">
                <span className="inline-block text-gold font-heading font-bold text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-gold/10 border border-gold/30">
                  Our Services
                </span>
                <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-charcoal mb-5 leading-tight tracking-tight uppercase">
                  Explore Our <span className="text-gold-gradient">Range</span>
                </h2>
                <div className="w-12 h-0.5 bg-gold mx-auto mb-5" />
                <p className="text-charcoal/65 text-base md:text-lg font-body leading-relaxed">
                  Explore our core services: external wall coatings and uPVC window and door spraying.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                
                return (
                  <ScrollReveal key={service.slug} variant="fade-up" delay={index * 80}>
                    <Link to={`/${service.slug}`} className="group block h-full">
                      <div className="bg-white border-2 border-charcoal/8 hover:border-gold/40 transition-all duration-400 shadow-sm hover:shadow-soft-lg overflow-hidden rounded-none text-left relative h-full flex flex-col">
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        {/* Image Container */}
                        <div className="relative h-48 overflow-hidden shrink-0">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0 opacity-70 group-hover:opacity-100" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <div className="bg-gold p-2.5">
                              <Icon className="w-5 h-5 text-charcoal" strokeWidth={2.5} />
                            </div>
                          </div>
                          {/* Price Badge */}
                          <div className="absolute top-4 right-4">
                            <div className="bg-charcoal/85 backdrop-blur-sm border border-gold/25 px-3 py-1.5 text-gold font-heading font-bold text-[10px] uppercase tracking-widest">
                              {service.pricing[0]?.price || "Get Quote"}
                            </div>
                          </div>
                        </div>
                    
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="font-display font-black text-lg text-charcoal mb-2 group-hover:text-gold transition-colors uppercase tracking-tight leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-charcoal/55 text-sm leading-relaxed mb-4 font-body flex-grow">
                            {service.shortDesc}
                          </p>
                    
                          <div className="space-y-2 mb-5">
                            {service.features.slice(0, 3).map((feature, i) => (
                              <div key={i} className="flex items-center gap-2.5 text-xs font-heading font-bold text-charcoal/70 uppercase tracking-wide">
                                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={3} />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="pt-4 border-t border-charcoal/8 mt-auto">
                            <span className="text-charcoal font-heading font-bold text-xs uppercase tracking-[0.15em] flex items-center gap-2 group-hover:gap-3 transition-all group-hover:text-gold">
                              View service <ArrowRight className="w-3.5 h-3.5 text-gold" strokeWidth={2.5} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-10 md:py-12 bg-gold relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="font-display font-black text-xl md:text-2xl text-charcoal uppercase tracking-tight mb-1">
                  Not Sure Which Service You Need?
                </h3>
                <p className="text-charcoal/70 text-sm font-body">
                  Get a free, no-obligation consultation — we'll recommend the right approach for your property.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button asChild variant="default" size="lg" className="rounded-none h-12 px-8 text-sm font-black uppercase tracking-widest">
                  <a href={getPhoneLink()} className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                    {siteConfig.contact.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 divider-gold" />
          <div className="absolute bottom-0 left-0 right-0 divider-gold" />
          
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <ScrollReveal variant="fade-up">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <div className="w-12 h-0.5 bg-gold mx-auto mb-5" />
                <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white mb-5 tracking-tight uppercase">
                  Our <span className="text-gold-gradient">Process</span>
                </h2>
                <p className="text-white/60 text-base md:text-lg font-body leading-relaxed">
                  A refined workflow that ensures your project is seamless, professional, and stress-free.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-5 lg:gap-6 relative">
              {/* Connector line between cards on desktop */}
              <div className="hidden md:block absolute top-[2.75rem] left-[calc(33.333%+0.75rem)] right-[calc(33.333%+0.75rem)] h-px bg-gradient-to-r from-gold/30 via-gold/15 to-gold/30 z-0" />

              {steps.map((step, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 120}>
                  <div className="h-full relative bg-white/[0.03] border border-white/10 hover:border-gold/30 transition-all duration-400 p-6 lg:p-8 group overflow-hidden backdrop-blur-sm">
                    {/* Decorative number */}
                    <span className="absolute -top-2 -right-1 text-[5rem] font-display font-black text-white/[0.04] leading-none select-none pointer-events-none group-hover:text-gold/[0.06] transition-colors duration-500">
                      0{i + 1}
                    </span>

                    {/* Top accent bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                    <div className="relative">
                      <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-5 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                        <step.icon className="w-5 h-5 text-gold" strokeWidth={2} />
                      </div>

                      <span className="text-gold text-[10px] font-heading font-bold uppercase tracking-[0.25em] block mb-2">
                        Step {i + 1}
                      </span>

                      <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300 tracking-tight">{step.title}</h3>
                      <p className="text-white/45 leading-relaxed font-body text-sm">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Process CTA */}
            <ScrollReveal variant="fade-up" delay={400}>
              <div className="mt-12 text-center">
                <p className="text-white/50 text-sm font-body mb-4">Ready to get started? It begins with a simple call.</p>
                <Button asChild variant="gold" size="lg" className="rounded-none h-12 px-8 text-sm font-black uppercase tracking-widest">
                  <a href={getPhoneLink()} className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                    BOOK FREE SURVEY
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Quality & Trust Section */}
        <section className="py-16 md:py-24 bg-background overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <ScrollReveal variant="fade-right" className="lg:col-span-7">
                <div>
                  <span className="inline-block text-gold font-heading font-bold text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-gold/10 border border-gold/30">
                    The Kirkhall Standard
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-5 leading-tight tracking-tight font-black uppercase">
                    Built for <span className="text-gold-gradient">Durability</span>,{" "}
                    Applied to Last <img src={logo} alt="Kirkhall Wall Coatings" className="w-14 h-14 md:w-18 md:h-18 inline-block align-middle" />
                  </h2>
                  <div className="w-12 h-0.5 bg-gold mb-6" />
                  <p className="text-base md:text-lg text-charcoal/65 leading-relaxed mb-8 font-body">
                    We do not just refresh appearances - we deliver coating systems that protect surfaces and improve long-term property condition.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Zap, text: "Quality Finishes" },
                      { icon: ShieldCheck, text: "Fully Insured" },
                      { icon: Shield, text: "Satisfaction Guaranteed" },
                      { icon: Clock, text: "On-Time Delivery" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-cream-warm/30 border border-charcoal/5 group hover:border-gold/25 transition-all">
                        <div className="w-10 h-10 bg-gold/10 border border-gold/25 flex items-center justify-center group-hover:bg-gold/20 transition-colors shrink-0">
                          <item.icon className="w-4.5 h-4.5 text-gold" strokeWidth={2.5} />
                        </div>
                        <span className="font-heading font-bold text-charcoal text-xs uppercase tracking-widest">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </ScrollReveal>
              
              <ScrollReveal variant="fade-left" className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-3 border border-gold/15 -z-10" />
                  <div className="bg-charcoal border-2 border-charcoal p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gold" />
                    
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                      </div>
                      <div className="h-5 w-px bg-white/15" />
                      <img src={checkatradeLogo} alt="Checkatrade" className="h-6 w-auto" />
                    </div>
                    
                    <h3 className="font-display text-2xl text-white mb-5 tracking-tight uppercase italic">Master Craftsmanship</h3>
                    <p className="text-lg text-white/60 mb-8 leading-relaxed font-body italic border-l-2 border-gold/25 pl-5">
                      "The attention to detail was exceptional. From survey through to completion, Kirkhall delivered exactly what was agreed."
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gold flex items-center justify-center">
                        <Home className="w-6 h-6 text-gold-foreground" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-white font-heading font-bold text-sm uppercase tracking-[0.15em]">Verified Client</p>
                        <p className="text-gold/70 text-[10px] font-heading font-bold tracking-[0.3em] uppercase">North Lanarkshire Homeowner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Trust CTA Band */}
        <section className="py-10 md:py-12 bg-charcoal relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-3">
                  <img src={googleLogo} alt="Google" className="h-7 w-auto" />
                  <img src={checkatradeLogo} alt="Checkatrade" className="h-8 w-auto" />
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                  </div>
                  <span className="text-white text-sm font-heading font-bold">5/5 on Google & Checkatrade</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="gold" size="lg" className="rounded-none h-12 px-8 text-sm font-black uppercase tracking-widest">
                  <a href={getPhoneLink()} className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                    GET FREE QUOTE
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none h-12 px-8 text-sm font-bold uppercase tracking-widest border-white/30 text-white hover:bg-white hover:text-charcoal">
                  <Link to="/reviews" className="flex items-center gap-2">
                    READ REVIEWS <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Coverage Section */}
        <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <ScrollReveal variant="fade-right" className="lg:col-span-6">
                <div>
                  <span className="inline-block text-gold font-heading font-bold text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-gold/10 border border-gold/30">
                    Areas We Serve
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-5 leading-tight tracking-tight font-black uppercase">
                    Serving <span className="text-gold-gradient">North Lanarkshire & Glasgow</span>
                  </h2>
                  <div className="w-12 h-0.5 bg-gold mb-6" />
                  <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-8 font-body">
                    Strategically scheduled local teams ensure rapid surveys and dependable project delivery across our service area.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                    {[
                      "Motherwell", "Airdrie", "Coatbridge", "Wishaw",
                      "Bellshill", "Glasgow", "Cumbernauld", "Kilsyth"
                    ].map((area, i) => (
                      <div key={i} className="flex items-center gap-3 text-charcoal font-heading font-bold uppercase tracking-widest text-xs border-b border-charcoal/8 pb-2.5 group cursor-default">
                        <MapPin className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                        {area}
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild variant="gold" size="lg" className="rounded-none h-12 px-8 text-sm font-black uppercase tracking-widest">
                    <Link to="/locations" className="flex items-center gap-2.5">
                      VIEW FULL COVERAGE <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-left" className="lg:col-span-6">
                <div className="relative group">
                  <div className="relative rounded-none overflow-hidden border-2 border-charcoal shadow-soft-lg">
                    <div className="relative h-[360px] lg:h-[420px]">
                      <img 
                        src={coverageHeroBg} 
                        alt="Kirkhall Wall Coatings service coverage" 
                        className="w-full h-full object-cover grayscale-[40%] opacity-50" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/90 via-charcoal/60 to-charcoal/30 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gold flex items-center justify-center mx-auto mb-5">
                            <MapPin className="w-8 h-8 text-gold-foreground" strokeWidth={2.5} />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-2 tracking-tight uppercase">Local Coverage</h3>
                          <p className="text-gold-light/70 font-heading font-bold uppercase tracking-[0.2em] text-xs">Across North Lanarkshire and Glasgow</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-charcoal border-t border-gold/30">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gold flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-gold-foreground" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h4 className="font-display text-lg text-white tracking-tight uppercase">Truly Local Service</h4>
                          <p className="text-gold-light/50 font-heading font-bold uppercase tracking-widest text-[10px]">Expert teams based near you</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default ServicesPage;
