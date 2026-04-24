import SEO from "@/components/SEO";
import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import FinalCTA from "@/components/FinalCTA";
import { Star, CheckCircle2, Quote, ArrowRight, Users, Award, ShieldCheck, MapPin, Calendar, ExternalLink, MessageSquare, Phone, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/components/GoogleIcon";
import { cn } from "@/lib/utils";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { motion } from "framer-motion";

// Image Imports
import heroBg from "@/assets/services-shots/interior-painting.webp";

const testimonials = [
  {
    name: "Craig M",
    location: "ML1",
    rating: 5,
    text: "External wall prep was thorough and the finish looks excellent. Communication was clear from survey to handover.",
    service: "External Wall Coatings",
    date: "February 2026",
    verified: true,
  },
  {
    name: "Aileen R",
    location: "G41",
    rating: 5,
    text: "Our roof refurbishment was handled professionally. The team explained every stage and left the site spotless.",
    service: "Roof Refurbishment",
    date: "January 2026",
    verified: true,
  },
  {
    name: "Verified Reviewer",
    location: "ML5",
    rating: 5,
    text: "uPVC spraying transformed our windows and door without replacement costs. The colour finish is smooth and consistent.",
    service: "uPVC Spraying",
    date: "January 2026",
    verified: true,
  },
  {
    name: "Gordon P",
    location: "G67",
    rating: 5,
    text: "Survey and quote were clear, and the team turned up exactly when planned. Great workmanship throughout.",
    service: "External Coatings Project",
    date: "January 2026",
    verified: true,
  },
  {
    name: "Verified Reviewer",
    location: "ML2",
    rating: 5,
    text: "Excellent prep and repair work before coating. The property looks cleaner and better protected now.",
    service: "Wall & Roof Refurbishment",
    date: "January 2026",
    verified: false,
  },
  {
    name: "Karen T",
    location: "G3",
    rating: 5,
    text: "Fast responses, honest advice, and a great finish. I would absolutely recommend Kirkhall Wall Coatings.",
    service: "Residential Coatings Upgrade",
    date: "January 2026",
    verified: true,
  },
];

const stats = [
  { label: "Customer Rating", value: "5.0/5", icon: Star, color: "text-gold" },
  { label: "Happy Customers", value: "150+", icon: Users, color: "text-gold" },
  { label: "Projects Completed", value: "300+", icon: CheckCircle2, color: "text-gold" },
  { label: "Years Guarantee", value: "10", icon: ShieldCheck, color: "text-gold" },
];

const ReviewsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`Customer Reviews & Testimonials | ${siteConfig.business.name}`}
        description={`Read real reviews from customers across Motherwell, North Lanarkshire, and Glasgow for external wall coatings, roof refurbishment, and uPVC spraying.`}
        canonical="https://kirkhall-wall-coatings.co.uk/reviews"
      />

      <TopBanner />
      <Header />

      <main>
        {/* Hero Section - Matching Index Hero style */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-charcoal min-h-[40vh] md:min-h-[60vh] flex items-center">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg}
              alt="Premium Painting & Decorating Reviews"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-charcoal/90" />
          </div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 pattern-grid opacity-20 z-[1]" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border-2 border-gold/30 text-gold text-sm font-heading font-bold uppercase tracking-widest mb-8"
            >
              <Star className="w-4 h-4 fill-gold text-gold" />
              Trusted by Homeowners Across Lanarkshire & Glasgow
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-white mb-6 md:mb-8 leading-tight max-w-5xl mx-auto tracking-industrial"
            >
              Real Stories From <div className="text-gold-gradient italic">Real Customers</div>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-base md:text-2xl leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12 font-body font-medium"
            >
              We have built our reputation on prep-first workmanship, honest pricing, and dependable service across North Lanarkshire and Glasgow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild variant="gold" size="xl" className="w-full sm:w-auto shadow-industrial-gold rounded-none">
                <a href={getPhoneLink()} className="flex items-center gap-3">
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                  CALL FOR A FREE QUOTE
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Grid - Industrial style */}
        <section className="-mt-16 relative z-20 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="border-2 border-charcoal bg-white shadow-[4px_4px_0_0_hsl(var(--gold))] overflow-hidden group hover:-translate-y-1 transition-all duration-300 rounded-none h-full">
                    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-charcoal flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                        <stat.icon className="w-6 h-6 text-gold group-hover:text-charcoal transition-colors duration-300" />
                      </div>
                      <div className="font-display font-black text-3xl md:text-4xl text-charcoal mb-1 tracking-tight">{stat.value}</div>
                      <div className="text-charcoal/60 font-heading font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Review - Premium Industrial Style */}
        <section className="py-14 md:py-24 bg-cream relative overflow-hidden">
          <div className="absolute inset-0 pattern-diagonal opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
                <div className="relative bg-charcoal-gradient border-2 border-gold/30 p-10 md:p-14 text-white shadow-2xl overflow-hidden group">
                  {/* Gold accent bar - top */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold shadow-industrial-gold" />
                  
                  <Quote className="absolute top-10 right-10 w-24 h-24 text-gold opacity-10 group-hover:opacity-20 transition-opacity" />
                  
                  <div className="flex items-center gap-1 mb-8 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl md:text-3xl font-body font-medium leading-relaxed mb-10 italic relative z-10">
                    "Kirkhall Wall Coatings provided exceptional service from start to finish. The preparation was thorough and the finish quality is outstanding."
                  </blockquote>
                  
                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-16 h-16 bg-gold flex items-center justify-center text-charcoal font-display font-black text-2xl">
                      JW
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xl flex items-center gap-2 uppercase tracking-wide">
                        James Wilson
                        <CheckCircle2 className="w-5 h-5 text-trust fill-trust/20" />
                      </div>
                      <p className="text-white/60 font-body">Verified Customer in Motherwell</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className="w-16 h-1 bg-gold mb-6" />
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border-2 border-gold/30 text-gold text-xs font-heading font-bold uppercase tracking-widest mb-6">
                  <Award className="w-3.5 h-3.5" />
                  Quality Assured
                </div>
                <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight tracking-industrial">
                  Why Our Customers <span className="text-gold-gradient">Trust Us</span>
                </h2>
                <div className="space-y-8">
                  {[
                    { title: "Premium Finishes", desc: "Expert application of high-end paint brands for a flawless, long-lasting result." },
                    { title: "Honest Pricing", desc: "No hidden fees or surprise charges. Upfront, transparent quotes always." },
                    { title: "Meticulous Prep", desc: "Thorough surface preparation to ensure the best possible finish and durability." },
                    { title: "Fully Insured", desc: "Complete peace of mind with our comprehensive public liability insurance." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="w-12 h-12 bg-charcoal flex-shrink-0 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                        <CheckCircle2 className="w-6 h-6 text-gold group-hover:text-charcoal transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-charcoal uppercase tracking-wide mb-1">{item.title}</h3>
                        <p className="text-charcoal/70 font-body leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* All Reviews Grid - Alternating Industrial Style */}
        <section id="reviews" className="py-14 md:py-32 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
              <div className="w-20 h-1 bg-gold mx-auto mb-8" />
              <h2 className="font-display font-black text-4xl md:text-6xl text-charcoal mb-6 tracking-industrial uppercase">
                Latest <span className="text-gold-gradient">Customer Reviews</span>
              </h2>
              <p className="text-charcoal/60 text-xl font-body">
                Real feedback from homeowners who chose Kirkhall Wall Coatings for external wall coatings, roof refurbishment, and uPVC spraying.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((review, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={cn(
                    "border-2 transition-all duration-300 relative flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl group rounded-none",
                    index % 2 === 1 
                      ? "bg-charcoal-gradient border-gold/30 hover:border-gold" 
                      : "bg-white border-charcoal/10 hover:border-gold/50"
                  )}>
                    {/* Top gold bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                    
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                          ))}
                        </div>
                        <div className={cn(
                          "flex items-center gap-2 text-[10px] font-heading font-bold px-3 py-1.5 border uppercase tracking-widest",
                          index % 2 === 1 
                            ? "text-white/70 bg-charcoal-light border-gold/20" 
                            : "text-charcoal/60 bg-secondary border-charcoal/10"
                        )}>
                          <Calendar className="w-3 h-3" />
                          {review.date}
                        </div>
                      </div>
                      
                      <p className={cn(
                        "text-lg font-body leading-relaxed mb-10 italic relative z-10",
                        index % 2 === 1 ? "text-white" : "text-charcoal"
                      )}>
                        "{review.text}"
                      </p>
                      
                      <div className={cn(
                        "mt-auto pt-8 border-t-2 flex flex-col gap-5",
                        index % 2 === 1 ? "border-gold/20" : "border-charcoal/5"
                      )}>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className={cn(
                              "font-heading font-bold text-lg flex items-center gap-2 uppercase tracking-wide",
                              index % 2 === 1 ? "text-white" : "text-charcoal"
                            )}>
                              {review.name}
                              {review.verified && <CheckCircle2 className="w-4 h-4 text-trust fill-trust/10" />}
                            </h4>
                            <div className={cn(
                              "flex items-center gap-1.5 text-sm font-body",
                              index % 2 === 1 ? "text-white/60" : "text-charcoal/60"
                            )}>
                              <MapPin className="w-3.5 h-3.5 text-gold" />
                              {review.location}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] bg-gold/10 text-gold font-heading font-bold px-3 py-1.5 border-2 border-gold/30 uppercase tracking-widest">
                            {review.service}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Google Review CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 p-10 bg-charcoal border-2 border-gold/40 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-gold/10 transition-colors" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white flex items-center justify-center rounded-none border-2 border-gold">
                    <GoogleIcon className="w-10 h-10" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-white font-heading font-bold uppercase tracking-widest text-sm">4.9/5 Average Rating</p>
                  </div>
                </div>
                <div className="h-12 w-px bg-white/10 hidden md:block" />
                <p className="text-white/80 font-body text-lg max-w-md">
                  We're proud of our 5-star reputation. See all our reviews on Google or leave your own.
                </p>
                <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-charcoal rounded-none px-8">
                  <a href={siteConfig.google.reviewLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    VIEW ON GOOGLE
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Conversion Section - Trust Bar style */}
        <section className="py-20 bg-gold relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left">
                <h2 className="font-display font-black text-4xl md:text-5xl text-charcoal mb-4 tracking-industrial uppercase">
                  Ready to be our next <span className="italic">Success Story?</span>
                </h2>
                <p className="text-charcoal/80 text-xl font-body font-medium max-w-2xl">
                  Join homeowners across North Lanarkshire and Glasgow. Get your free, no-obligation quote today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Button asChild variant="default" size="xl" className="rounded-none px-10 shadow-xl">
                  <a href={getPhoneLink()} className="flex items-center gap-3">
                    <Phone className="w-6 h-6" strokeWidth={2.5} />
                    {siteConfig.contact.phone}
                  </a>
                </Button>
                <Button asChild variant="outline" size="xl" className="rounded-none px-10 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all">
                  <a href="/#quote" className="flex items-center gap-2">
                    GET ONLINE QUOTE
                    <ChevronRight className="w-6 h-6" />
                  </a>
                </Button>
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

export default ReviewsPage;
