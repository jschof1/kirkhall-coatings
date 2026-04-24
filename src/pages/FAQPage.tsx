import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  CreditCard, 
  MessageSquare,
  ArrowRight,
  Search
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";
import { siteConfig } from "@/data/siteConfig";

// Image Imports
import heroBg from "@/assets/photos/hero-bg.webp";

const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        q: "What areas do you cover?",
        a: "We primarily cover Motherwell, North Lanarkshire, and Glasgow, including nearby towns such as Airdrie, Coatbridge, Wishaw, Bellshill, Cumbernauld, and Kilsyth."
      },
      {
        q: "How long has Kirkhall Wall Coatings been in business?",
        a: "Kirkhall Wall Coatings is a family-run team with over 20 years of practical coatings and refurbishment experience."
      },
      {
        q: "Are you fully insured?",
        a: "Yes, we are fully insured with public liability insurance up to £2M. We take every precaution to ensure your property is protected, but we have comprehensive coverage for your complete peace of mind."
      }
    ]
  },
  {
    id: "services",
    title: "Services & Expertise",
    icon: ShieldCheck,
    questions: [
      {
        q: "What services do you offer?",
        a: "Our core services are external wall coatings, roof refurbishment, and uPVC spraying for windows, doors, fascias, and trims."
      },
      {
        q: "Do you repair surfaces before coating?",
        a: "Yes. We assess substrate condition first and complete preparation and repairs before applying any coating system."
      },
      {
        q: "Can you help with colour selection?",
        a: "Yes. We provide practical guidance on coating colours and finishes to suit the property style and existing surfaces."
      },
      {
        q: "What's included in a standard project?",
        a: "Our standard projects include survey, preparation, required repair stages, coating application, and a tidy handover. Exact scope is confirmed in writing before work starts."
      }
    ]
  },
  {
    id: "process",
    title: "Our Process",
    icon: Wrench,
    questions: [
      {
        q: "How do you protect my furniture and flooring?",
        a: "Protecting your home is our top priority. We use high-quality dust sheets, plastic sheeting, and specialized floor protection (like Correx or Packexe) to ensure every surface is fully covered before we start work."
      },
      {
        q: "How long does a typical project take?",
        a: "The duration depends on the scope of the work. A single room typically takes 2-3 days, while a full house might take 1-2 weeks. We will provide a clear timeline as part of our detailed quotation."
      },
      {
        q: "Do I need to move my furniture before you arrive?",
        a: "We ask that you move small items and breakables. We can assist with moving larger pieces of furniture to the centre of the room, where they will be thoroughly covered and protected."
      }
    ]
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    icon: Truck,
    questions: [
      {
        q: "When is the best time for external coating work?",
        a: "Most external work is planned around stable weather windows, but scheduling depends on the specific substrate and system requirements."
      },
      {
        q: "Do you handle roof and wall repairs before coating?",
        a: "Yes. We carry out relevant prep and repairs before coating so the finish bonds correctly and performs long term."
      }
    ]
  },
  {
    id: "pricing",
    title: "Pricing & Quotes",
    icon: CreditCard,
    questions: [
      {
        q: "Do you offer free quotes?",
        a: "Yes, we provide free, no-obligation surveys and quotations. We'll visit your property, discuss your requirements, and provide a transparent, detailed price with no hidden extras."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, cash, and major credit/debit cards. Payment terms will be clearly outlined in your quotation."
      },
      {
        q: "Are there any hidden costs in your quotes?",
        a: "No. Our quotes are fully inclusive of all materials (unless specified otherwise), professional labour, and site clearance. The price we quote is the price you pay."
      },
      {
        q: "What exactly is included in the price?",
        a: "Our standard pricing covers survey, preparation, coating application, and clean handover. Any additional remediation or access requirements are listed transparently in your quote."
      }
    ]
  }
];

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap((category) =>
      category.questions.map((question) => ({
        "@type": "Question",
        "name": question.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": question.a,
        },
      }))
    ),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${siteConfig.seo.siteUrl}/`,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "FAQ",
        "item": `${siteConfig.seo.siteUrl}/faq`,
      },
    ],
  };

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Frequently Asked Questions | Kirkhall Wall Coatings"
        description="Find answers to common questions about external wall coatings, roof refurbishment, and uPVC spraying across Motherwell, North Lanarkshire, and Glasgow."
        canonical={`${siteConfig.seo.siteUrl}/faq`}
        schema={[faqSchema, breadcrumbSchema]}
      />
      <TopBanner />
      <Header />
      <PromoBanner />

      <main>
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-charcoal overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-charcoal/80 z-10" />
            <img 
              src={heroBg} 
              alt="Background" 
              className="w-full h-full object-cover opacity-30 grayscale"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h1 className="font-display text-3xl sm:text-4xl md:text-7xl text-white mb-4 md:mb-6 tracking-industrial">
                HOW CAN WE <span className="text-gold">HELP?</span>
              </h1>
              <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto mb-6 md:mb-10 font-body">
                Find answers to common questions about our services, process, and local coverage. 
                Can't find what you're looking for? Get in touch with our team.
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for a question..."
                  className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold rounded-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block space-y-2">
              <div className="sticky top-32">
                <h3 className="font-display text-xl mb-6 text-foreground tracking-tight">CATEGORIES</h3>
                {faqCategories.map((category) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="flex items-center gap-3 p-3 text-muted-foreground hover:text-gold hover:bg-charcoal/5 transition-colors border-l-2 border-transparent hover:border-gold group"
                  >
                    <category.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-heading font-semibold text-sm uppercase tracking-wider">{category.title}</span>
                  </a>
                ))}
                
                <div className="mt-12 p-6 bg-charcoal text-white border-l-4 border-gold">
                  <h4 className="font-display text-lg mb-2">STILL HAVE QUESTIONS?</h4>
                  <p className="text-sm text-white/60 mb-4 font-body">Our experts are here to help you with your project.</p>
                  <Button variant="gold" className="w-full" asChild>
                    <a href="/get-quote">CONTACT US</a>
                  </Button>
                </div>
              </div>
            </aside>

            {/* Accordions */}
            <div className="lg:col-span-3 space-y-16">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((category) => (
                  <div key={category.id} id={category.id} className="scroll-mt-32">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-charcoal text-gold">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <h2 className="font-display text-3xl text-foreground tracking-tight uppercase">
                        {category.title}
                      </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {category.questions.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`${category.id}-${index}`}
                          className="border-2 border-border px-6 bg-card hover:border-gold/30 transition-colors"
                        >
                          <AccordionTrigger className="text-left font-heading font-bold text-lg py-6 hover:no-underline hover:text-gold transition-colors">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6 font-body">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-charcoal/5 border-2 border-dashed border-border">
                  <MessageSquare className="w-12 h-12 text-gold/40 mx-auto mb-4" />
                  <h3 className="font-display text-2xl mb-2">NO RESULTS FOUND</h3>
                  <p className="text-muted-foreground font-body">
                    We couldn't find any questions matching "{searchQuery}". 
                    Try a different search term or contact us directly.
                  </p>
                  <Button variant="gold" className="mt-6" onClick={() => setSearchQuery("")}>
                    CLEAR SEARCH
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-20 bg-charcoal-light border-y-2 border-gold/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "EXPERTISE", value: "30+ Years", sub: "Industry Experience" },
                { label: "WARRANTY", value: "Quality", sub: "Guaranteed" },
                { label: "INSURANCE", value: "£2M", sub: "Public Liability" },
                { label: "SERVICE", value: "Lanarkshire", sub: "& Glasgow Covered" }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <p className="text-gold font-heading font-bold text-xs uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-white font-display text-4xl mb-1 group-hover:scale-110 transition-transform">{stat.value}</p>
                  <p className="text-white/40 text-sm font-body">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA areaName="North Lanarkshire" />
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
