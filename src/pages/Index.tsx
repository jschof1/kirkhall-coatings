import SEO from "@/components/SEO";
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import TopBanner from "@/components/TopBanner";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
// import ProductsGrid from "@/components/ProductsGrid";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import ScrollProgress from "@/components/ScrollProgress";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import { Phone, ChevronRight, Shield, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// Clean mid-page CTA - simple and effective
const MidPageCTA = () => (
  <section className="py-12 md:py-16 relative border-y-4 border-accent">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
            Ready to Protect and Refresh Your Exterior?
          </h3>
          <p className="text-muted-foreground text-lg">
            Get a free, no-obligation quote today
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8"
          >
            <a href="#contact">
              Get Free Quote
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-accent text-foreground font-bold"
          >
            <a href={getPhoneLink()}>
              <Phone className="w-4 h-4 mr-2" />
              {siteConfig.contact.phone}
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// Clean guarantee section
const GuaranteeSection = () => (
  <section className="py-20 md:py-24 bg-background">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest mb-4">
          Our Promise to You
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-foreground">
          The Kirkhall Wall Coatings Guarantee
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            icon: Shield,
            title: "Fully Insured",
            description: "£2M public liability cover for complete peace of mind",
          },
          {
            icon: Award,
            title: "Satisfaction Guaranteed",
            description: "Not happy? We'll make it right at no extra cost",
          },
          {
            icon: CheckCircle2,
            title: "Quality Promise",
            description: "Premium finishes with meticulous attention to detail",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2 font-bold">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Kirkhall Wall Coatings | External Wall & uPVC Window Specialists"
        description="External wall coatings and uPVC window and door spraying across Motherwell, North Lanarkshire, and Glasgow. Free surveys and detailed quotes."
        keywords={["external wall coatings", "upvc window spraying", "upvc spraying", "motherwell wall coatings", "north lanarkshire upvc spraying", "glasgow upvc window spraying"]}
        canonical="https://kirkhall-wall-coatings.co.uk/"
      />

      <ScrollProgress />
      <TopBanner />
      <Header />
      <PromoBanner />
      
      <main>
        {/* Hero - Strong first impression */}
        <Hero />
        
        {/* Trust Bar - Immediate credibility */}
        <TrustBar />
        
        {/* Services - What we offer */}
        {/* <ProductsGrid /> */}
        <ServicesGrid />
        {/* Why Choose Us - Value proposition */}
        <WhyChooseUs />
        
        {/* Mid-page CTA */}
        <MidPageCTA />
        
        {/* Social proof - Testimonials */}
        <Testimonials />
        
        {/* Guarantee - Remove risk */}
        <GuaranteeSection />
        
        {/* Service Areas */}
        <ServiceAreas />
        
        {/* FAQ */}
        <FAQ />
        
        {/* Final CTA */}
        <FinalCTA />
      </main>
      
      <Footer />
      
      {/* Floating elements */}
      <MobileCallButton />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
