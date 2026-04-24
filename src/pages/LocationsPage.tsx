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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { areas } from "../data/areas";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Navigation, 
  Shield, 
  Clock, 
  Star, 
  Sparkles, 
  Zap, 
  Home, 
  ChevronRight
} from "lucide-react";

// Image Imports
import heroBg from "@/assets/services-shots/commercial-decorating.webp";

const LocationsPage = () => {
  // Group areas by region
  const regions = areas.reduce((acc, area) => {
    if (!acc[area.region]) acc[area.region] = [];
    acc[area.region].push(area);
    return acc;
  }, {} as Record<string, typeof areas>);

  const trustStats = [
    { value: "100+", label: "Projects Completed", icon: CheckCircle2 },
    { value: "100%", label: "Satisfaction", icon: Star },
    { value: "Fully", label: "Insured", icon: Shield },
    { value: "Family", label: "Run", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`Service Areas | ${siteConfig.business.name}`}
        description={`${siteConfig.business.name} provides external wall coatings, roof refurbishment, and uPVC spraying across Motherwell, North Lanarkshire, and Glasgow.`}
        canonical="https://kirkhall-wall-coatings.co.uk/locations"
      />

      <ScrollProgress />
      <TopBanner />
      <Header />
      <PromoBanner />
      
      <main>
        {/* Hero Section - Industrial Gold Theme */}
        <section className="relative pt-8 px-4 md:px-8 lg:px-12 min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-cream via-background to-cream-warm">
          {/* Gold radial accent in corner */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-radial pointer-events-none" />
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg}
              alt="Kirkhall Wall Coatings service coverage"
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/90" />
          </div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 pattern-grid opacity-20" />
          
          <div className="max-w-none w-full mx-auto px-4 md:px-12 relative z-10 py-12 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-20 h-1 bg-gold mb-8 mx-auto shadow-industrial-gold"
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 bg-charcoal-light border-2 border-gold/40 px-6 py-2 mb-8 shadow-industrial-sm"
              >
                <Navigation className="w-4 h-4 text-gold" />
                <span className="text-white text-xs font-heading font-bold uppercase tracking-[0.3em]">
                  Serving Motherwell, North Lanarkshire & Glasgow
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6 md:mb-8 tracking-industrial uppercase"
              >
                Our Service <br />
                <span className="text-gold-gradient relative inline-block">
                  Areas
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-2 bg-gold shadow-industrial-gold" 
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-body font-medium"
              >
                From Motherwell to Glasgow and surrounding Lanarkshire towns, we deliver prep-first coating solutions for homes and commercial properties.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Button asChild variant="gold" size="xl" className="shadow-industrial-gold rounded-none h-12 sm:h-14 md:h-16 px-8 md:px-12 text-base md:text-xl font-black uppercase tracking-widest">
                  <a href={getPhoneLink()} className="flex items-center gap-3">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                    CALL FOR QUOTE
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
        </section>

        {/* Quick Trust Stats Bar */}
        <section className="py-8 bg-charcoal-gradient relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 divider-gold" />
          <div className="absolute bottom-0 left-0 right-0 divider-gold" />
          <div className="absolute inset-0 texture-forge opacity-10" />
          
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {trustStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gold/20 border-2 border-gold/50 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/30 transition-all">
                    <stat.icon className="w-5 h-5 text-gold" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl text-white leading-none mb-1 uppercase tracking-tighter">{stat.value}</div>
                    <div className="text-gold-light/60 font-heading font-bold text-[10px] uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-14 md:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            {Object.entries(regions).map(([region, regionAreas], regionIndex) => (
              <div key={region} className={regionIndex > 0 ? "mt-24" : ""}>
                <ScrollReveal variant="fade-up">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-1 bg-gold shadow-industrial-gold" />
                    <h2 className="font-display font-black text-4xl md:text-5xl text-charcoal uppercase tracking-industrial">
                      {region} <span className="text-gold-gradient">Coverage</span>
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regionAreas.map((area, index) => (
                    <ScrollReveal key={area.slug} variant="fade-up" delay={index * 50}>
                      <Link to={`/${area.slug}`} className="group block h-full">
                        <div className="bg-white border-2 border-charcoal/10 hover:border-gold/50 transition-all duration-500 shadow-sm hover:shadow-industrial-gold overflow-hidden rounded-none text-left relative h-full flex flex-col p-8">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-14 h-14 bg-charcoal border-2 border-gold/40 flex items-center justify-center text-gold shadow-industrial-sm group-hover:border-gold transition-all">
                              <MapPin className="w-7 h-7" strokeWidth={2.5} />
                            </div>
                            <Badge variant="outline" className="border-gold/30 text-gold-dark font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-none">
                              {area.postcodes[0]}
                            </Badge>
                          </div>

                          <h3 className="font-display font-black text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors uppercase tracking-tight">
                            {area.name}
                          </h3>
                          
                          <p className="text-charcoal/60 text-base leading-relaxed mb-8 font-body font-medium flex-grow line-clamp-3">
                            {area.description}
                          </p>

                          <div className="pt-6 border-t-2 border-charcoal/5 mt-auto">
                            <span className="text-charcoal font-heading font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all border-b-2 border-gold/30 pb-1 w-fit group-hover:border-gold">
                              VIEW AREA DETAILS <ArrowRight className="w-4 h-4 text-gold" strokeWidth={3} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Map Visualization Section */}
        <section className="py-14 md:py-32 bg-cream relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <ScrollReveal variant="fade-right" className="lg:col-span-7">
                <div className="relative group">
                  <div className="relative rounded-none overflow-hidden shadow-industrial border-2 border-charcoal">
                    <div className="relative h-[500px] lg:h-[600px]">
                      <img 
                        src={heroBg} 
                        alt="Kirkhall coverage map" 
                        className="w-full h-full object-cover grayscale opacity-40" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/90 via-charcoal/60 to-transparent flex items-center justify-center p-12">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gold rounded-none flex items-center justify-center mx-auto mb-8 shadow-industrial-gold">
                            <Navigation className="w-12 h-12 text-gold-foreground" strokeWidth={2.5} />
                          </div>
                          <h3 className="text-4xl font-display font-black text-white mb-4 tracking-wide uppercase italic">Rapid Response Unit</h3>
                          <p className="text-gold-light font-heading font-bold uppercase tracking-[0.3em] text-sm">Strategically Based Across Lanarkshire and Glasgow</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-charcoal border-t-2 border-gold/50">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-gold rounded-none flex items-center justify-center shadow-industrial-gold shrink-0">
                          <MapPin className="w-7 h-7 text-gold-foreground" strokeWidth={3} />
                        </div>
                        <div>
                          <h4 className="font-display text-2xl text-white mb-1 tracking-wide uppercase">Local Focus</h4>
                          <p className="text-gold-light font-heading font-bold uppercase tracking-widest text-xs">Truly Local Service, Every Time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-left" className="lg:col-span-5">
                <div>
                  <span className="inline-block text-gold font-heading font-bold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 bg-gold/10 border-2 border-gold/30 shadow-industrial-sm">
                    Coverage
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight tracking-industrial font-black uppercase">
                    Truly Local <br /><span className="text-gold-gradient">Service</span>
                  </h2>
                  <div className="w-20 h-1.5 bg-gold mb-8" />
                  <p className="text-charcoal/80 text-xl leading-relaxed mb-10 font-body font-medium">
                    We are truly local. Our strategically placed coatings teams can reach service locations quickly for surveys and planned project starts.
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-5 p-6 bg-white border-2 border-charcoal/5 group hover:border-gold/30 transition-all shadow-industrial-sm">
                      <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors shrink-0">
                        <Zap className="w-6 h-6 text-gold" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-charcoal uppercase tracking-widest text-sm mb-1">Rapid Survey</h4>
                        <p className="text-charcoal/60 text-sm font-body">Free, no-obligation home visits within 48 hours.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 p-6 bg-white border-2 border-charcoal/5 group hover:border-gold/30 transition-all shadow-industrial-sm">
                      <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors shrink-0">
                        <Home className="w-6 h-6 text-gold" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-charcoal uppercase tracking-widest text-sm mb-1">Expert Decorating</h4>
                        <p className="text-charcoal/60 text-sm font-body">Master decorators who know the local architectural styles.</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button asChild variant="gold" size="xl" className="shadow-industrial-gold rounded-none h-12 md:h-16 px-8 md:px-10 text-base md:text-lg font-black uppercase tracking-widest w-full">
                    <a href={getPhoneLink()} className="flex items-center justify-center gap-3">
                      <Phone className="w-6 h-6" strokeWidth={3} />
                      {siteConfig.contact.phone}
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 texture-forge opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 divider-gold" />
          <div className="absolute bottom-0 left-0 right-0 divider-gold" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <ScrollReveal variant="fade-up">
              <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-10 uppercase tracking-industrial leading-none">
                Don't See Your <br />
                <span className="text-gold-gradient relative inline-block">
                  Location?
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-gold/20 -z-10" />
                </span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-white/70 font-body font-medium max-w-3xl mx-auto leading-relaxed">
                We likely have a coatings team nearby. Call now to confirm coverage and book your free local survey.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Button asChild variant="gold" size="xl" className="shadow-industrial-gold rounded-none h-14 md:h-20 px-8 md:px-12 text-lg md:text-2xl font-black uppercase tracking-widest">
                  <a href={getPhoneLink()} className="flex items-center gap-3 md:gap-4">
                    <Phone className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                    CALL NOW
                  </a>
                </Button>
                <div className="text-left">
                  <p className="text-white font-heading font-bold uppercase tracking-[0.2em] text-sm mb-1">Expert Advice</p>
                  <p className="text-gold text-xs font-heading font-bold tracking-[0.4em] uppercase">100% Free Quote</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <FinalCTA />
      </main>
      
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default LocationsPage;
