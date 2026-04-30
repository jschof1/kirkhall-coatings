import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { 
  Shield, 
  Award, 
  Clock, 
  Users, 
  CheckCircle2, 
  Star, 
  Hammer, 
  Heart, 
  ShieldCheck,
  Zap,
  ArrowRight,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import FinalCTA from "@/components/FinalCTA";
import ScrollProgress from "@/components/ScrollProgress";
import MobileCallButton from "@/components/MobileCallButton";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import storyImage from "@/assets/kirkhall/kirkhall-trust-team-workmanship-4x3.jpeg";
import expertiseImage from "@/assets/kirkhall/kirkhall-service-external-wall-coatings-4x3.jpeg";

const AboutPage = () => {
  const stats = [
    { label: "Years Experience", value: siteConfig.business.yearsExperience + "+" },
    { label: "Successful Installs", value: "100+" },
    { label: "Customer Rating", value: "4.9/5" },
    { label: "Guarantee", value: "10 Years" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "We don't just paint walls; we enhance homes. Every project is fueled by a genuine passion for aesthetic beauty and functional perfection."
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      description: "From premium finishes to durable coatings, we never settle for 'good enough'. We only use products we would trust in our own homes."
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description: "Our relationship with you doesn't end at completion. We provide transparent communication and dedicated aftercare for total peace of mind."
    },
    {
      icon: Hammer,
      title: "Master Craftsmanship",
      description: "Coating application is technical work. Our expert team brings decades of combined experience and meticulous attention to substrate prep and finish quality."
    }
  ];

  const expertisePoints = [
    "Expert knowledge of premium paint brands and specialist finishes.",
    "Specialized methods for external wall coatings and uPVC window and door spraying.",
    "Deep understanding of surface preparation and material compatibility.",
    "Meticulous site protection and daily clean-up protocols.",
    "Bespoke colour consultation to match your home's unique character."
  ];

  return (
    <div className="min-h-screen bg-cream">
      <SEO 
        title="About Kirkhall Wall Coatings | External Coatings Specialists"
        description="Learn about Kirkhall Wall Coatings and our prep-first approach to external wall coatings and uPVC window and door spraying across North Lanarkshire and Glasgow."
        canonical="https://kirkhall-wall-coatings.co.uk/about"
      />

      <ScrollProgress />
      <TopBanner />
      <Header />
      <PromoBanner />

      <main>
        {/* Hero Section */}
        <section className="relative py-12 md:py-32 bg-charcoal overflow-hidden">
          <div className="absolute inset-0 texture-forge" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block text-gold font-heading font-bold text-sm uppercase tracking-[0.2em] mb-6 px-4 py-2 border border-gold/30 bg-gold/5">
                Our Story & Passion
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-7xl text-white mb-6 md:mb-8 tracking-tight leading-[1.1]">
                CRAFTING THE <span className="text-gold-gradient">KIRKHALL</span> STANDARD
              </h1>
              <p className="text-white/80 text-base sm:text-lg md:text-2xl leading-relaxed font-body max-w-2xl mx-auto">
                Built on a foundation of master craftsmanship and an unwavering commitment to quality, we deliver coating systems that protect and upgrade properties.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 md:py-12 bg-gold relative z-20 -mt-6 md:-mt-8 shadow-industrial mx-4 md:mx-auto max-w-6xl">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center border-r last:border-0 border-charcoal/10">
                  <div className="font-display text-2xl sm:text-3xl md:text-5xl text-charcoal mb-1">{stat.value}</div>
                  <div className="text-charcoal/70 font-heading font-bold uppercase text-[10px] md:text-xs tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-14 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold opacity-50" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold opacity-50" />
                  <div className="aspect-[4/5] bg-charcoal-light relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent z-10" />
                    <img 
                      src={storyImage} 
                      alt="Kirkhall Wall Coatings craftsmanship" 
                      className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-gold p-8 shadow-industrial hidden md:block z-20">
                    <QuoteIcon className="w-12 h-12 text-charcoal mb-4 opacity-30" />
                    <p className="text-charcoal font-display text-xl italic leading-tight max-w-[200px]">
                      "Quality is never an accident; it is always the result of intelligent effort."
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 space-y-8"
              >
                <div className="w-16 h-1 bg-gold mb-6" />
                <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-charcoal leading-tight">
                  A LEGACY OF EXCELLENCE IN EVERY PROJECT
                </h2>
                <div className="space-y-4 md:space-y-6 text-charcoal/80 text-base md:text-lg font-body leading-relaxed">
                  <p>
                    Kirkhall Wall Coatings was founded with a simple goal: deliver external coating and refurbishment work to a consistently high standard.
                  </p>
                  <p>
                    We know exterior condition affects both property value and long-term maintenance. That is why we focus on thorough preparation, correct product systems, and dependable application from survey to completion.
                  </p>
                  <p>
                    Our passion lies in the details. Whether it is external wall remediation, prep and sealing stages, or uPVC window spraying, we treat every property as if it were our own.
                  </p>
                </div>
                <div className="pt-4">
                  <Button asChild variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none border-2 px-8 py-6 h-auto text-lg font-heading font-bold uppercase tracking-widest">
                    <a href={getPhoneLink()} className="flex items-center gap-3 text-center">
                      <Phone className="w-5 h-5" />
                      Call Now for Free Estimate
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-14 md:py-32 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 texture-forge opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
              <h2 className="font-display text-2xl sm:text-3xl md:text-6xl text-white mb-4 md:mb-6">OUR CORE VALUES</h2>
              <p className="text-white/60 text-base md:text-xl font-body">The principles that guide every project we undertake and every decision we make.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-4 md:p-8 hover:border-gold/50 transition-colors group"
                >
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                    <value.icon className="w-7 h-7 text-gold group-hover:text-charcoal transition-colors" />
                  </div>
                  <h3 className="font-display text-base md:text-2xl text-white mb-2 md:mb-4 uppercase tracking-tight">{value.title}</h3>
                  <p className="text-white/60 font-body leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-14 md:py-32 bg-cream-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal text-gold text-sm font-heading font-bold uppercase tracking-widest">
                    <Zap className="w-4 h-4" />
                    Unmatched Expertise
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
                    WHY EXPERTISE MATTERS IN COATINGS
                  </h2>
                  <p className="text-charcoal/70 text-lg font-body leading-relaxed">
                    A premium finish is only as good as the preparation behind it. Poor prep leads to coating failure and premature wear. At Kirkhall Wall Coatings, we protect your investment through technical, prep-led workmanship.
                  </p>
                  <ul className="space-y-4">
                    {expertisePoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                        <span className="text-charcoal font-body text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Button asChild className="bg-charcoal text-gold hover:bg-charcoal/90 rounded-none px-8 py-6 h-auto text-lg font-heading font-bold uppercase tracking-widest">
                      <a href={getPhoneLink()} className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        Get Free Estimate
                      </a>
                    </Button>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative pb-12"
                >
                  <div className="aspect-square bg-charcoal shadow-2xl relative">
                    <img 
                      src={expertiseImage} 
                      alt="Installation Detail" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 bg-gold/90 backdrop-blur-sm p-6 md:p-12 text-center w-[80%] shadow-industrial z-20">
                      <div className="font-display text-3xl md:text-6xl text-charcoal mb-1 md:mb-2">30+</div>
                      <div className="font-heading font-bold text-charcoal uppercase tracking-widest text-[10px] md:text-sm">Years of Technical Mastery</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white border-y-2 border-charcoal/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-12 h-12 text-charcoal" />
                <span className="font-heading font-bold text-xs uppercase tracking-widest">Fully Insured</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="w-12 h-12 text-charcoal" />
                <span className="font-heading font-bold text-xs uppercase tracking-widest">Quality Guaranteed</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-12 h-12 text-charcoal" />
                <span className="font-heading font-bold text-xs uppercase tracking-widest">Expert Team</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="w-12 h-12 text-charcoal" />
                <span className="font-heading font-bold text-xs uppercase tracking-widest">Premium Finishes</span>
              </div>
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

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H19.017C21.2261 4 23.017 5.79086 23.017 8V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H2C1.44772 8 1 7.55228 1 7V5C1 4.44772 1.44772 4 2 4H6C8.20914 4 10 5.79086 10 8V15C10 18.3137 7.31371 21 4 21H1Z" />
  </svg>
);

export default AboutPage;
