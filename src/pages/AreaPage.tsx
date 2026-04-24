import { useParams, Navigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { getAreaBySlug } from "../data/areas";
import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import ScrollProgress from "@/components/ScrollProgress";
import TrustBar from "@/components/TrustBar";
import FinalCTA from "@/components/FinalCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { cn, formatPhoneNumber } from "@/lib/utils";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { motion, AnimatePresence } from "framer-motion";

// Area Hero Images
import interiorPaintingImg from "@/assets/services-shots/interior-painting.webp";
import exteriorPaintingImg from "@/assets/services-shots/exterior-painting-2.webp";
import woodworkTrimImg from "@/assets/services-shots/woodwork---trim.webp";
import commercialDecoratingImg from "@/assets/services-shots/commercial-decorating.webp";

// Certification logos
import googleLogo from "@/assets/icons/certifications/google-g-logo.svg";
import checkatradeLogo from "@/assets/icons/certifications/checkatrade.png";

import {
  ChevronRight,
  Phone,
  Star,
  Shield,
  Clock,
  X,
  Loader2,
  Quote,
  Plus,
  Minus,
  Home as HomeIcon,
  Paintbrush,
  Layers,
  Sparkles,
} from "lucide-react";

const AreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getAreaBySlug(slug) : null;

  const areaImages: Record<string, string> = {
    motherwell: exteriorPaintingImg,
    glasgow: commercialDecoratingImg,
    cumbernauld: exteriorPaintingImg,
    coatbridge: woodworkTrimImg,
    airdrie: exteriorPaintingImg,
    wishaw: exteriorPaintingImg,
    bellshill: woodworkTrimImg,
    kilsyth: exteriorPaintingImg,
    "north-lanarkshire": commercialDecoratingImg,
  };

  const heroBg = area
    ? areaImages[area.slug] || interiorPaintingImg
    : interiorPaintingImg;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    postcode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [quotesThisWeek, setQuotesThisWeek] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    setQuotesThisWeek(Math.floor(Math.random() * 6) + 7);
  }, []);

  if (!area) {
    return <Navigate to="/404" replace />;
  }

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
          source: "area_page_form",
          area: area.name,
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

  const localProducts = [
    {
      icon: HomeIcon,
      title: "External Wall Coatings",
      desc: "Repair-led prep and coating systems for long-term weather protection",
    },
    {
      icon: Paintbrush,
      title: "Roof Refurbishment",
      desc: "Safe cleaning, targeted repairs, and protective roof coatings",
    },
    {
      icon: Sparkles,
      title: "uPVC Spraying",
      desc: "Durable spray finishes for windows, doors, fascias, and trims",
    },
    {
      icon: Layers,
      title: "Surface Preparation",
      desc: "Substrate cleaning, crack repair, and stabilising prep as standard",
    },
  ];

  const areaFaqs = [
    {
      q: `How quickly can you start in ${area.name}?`,
      a: `We can typically provide a quote within 24 hours and start your project within 1-2 weeks. Our local team ensures efficient scheduling across all ${area.postcodes.join(" & ")} postcodes, from the town centre to the surrounding residential areas.`,
    },
    {
      q: `Are your services suitable for ${area.name}'s period properties?`,
      a: `Yes. We adapt coating specifications and preparation methods to the property type so period details are respected while durability is improved.`,
    },
    {
      q: "How do you protect my home during the work?",
      a: "We use professional-grade floor and furniture protection, including dust sheets and specialized tapes. Our team is known for being exceptionally tidy, ensuring your home is left clean at the end of every day.",
    },
    {
      q: "Do you offer free quotes?",
      a: "Yes, we provide completely free, no-obligation quotes. We'll visit your property in person to discuss your requirements and provide a detailed written estimate.",
    },
    {
      q: "What's included in your standard coating service?",
      a: `Our standard process includes substrate inspection, cleaning, preparation, defect repairs where required, primer/adhesion stage, and system-coated finish coats. Exact scope is confirmed in your written quote for ${area.name}.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: areaFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: `Kirkhall Wall Coatings - ${area.name}`,
      description:
        area.description ||
        `External wall coatings, roof refurbishment, and uPVC spraying in ${area.name}.`,
      url: `https://kirkhall-wall-coatings.co.uk/${area.slug}`,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      areaServed: {
        "@type": "Place",
        name: area.name,
        containsPlace: area.postcodes.map((pc) => ({
          "@type": "Place",
          name: pc,
        })),
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: area.name,
        addressRegion: area.region,
        addressCountry: "GB",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://kirkhall-wall-coatings.co.uk/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: area.name,
          item: `https://kirkhall-wall-coatings.co.uk/${area.slug}`,
        },
      ],
    },
    faqSchema,
  ];

  // ------------ Inline form component to avoid duplication ------------
  const QuoteForm = ({
    variant = "light",
  }: {
    variant?: "light" | "dark" | "panel";
  }) => (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className={cn(
          "h-13 text-base",
          variant === "panel" && "h-12"
        )}
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
        className={cn(
          "h-13 text-base",
          variant === "panel" && "h-12"
        )}
      />
      <Select
        value={formData.product}
        onValueChange={(value) => setFormData({ ...formData, product: value })}
      >
        <SelectTrigger
          className={cn(
            "h-13 text-base",
            variant === "panel" && "h-12"
          )}
        >
          <SelectValue placeholder="Service Required" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="external-wall-coatings">External Wall Coatings</SelectItem>
          <SelectItem value="roof-refurbishment">Roof Refurbishment</SelectItem>
          <SelectItem value="upvc-spraying">uPVC Spraying</SelectItem>
          <SelectItem value="surface-prep">Surface Preparation</SelectItem>
          <SelectItem value="other">Not Sure Yet</SelectItem>
        </SelectContent>
      </Select>
      <Input
        placeholder="Postcode (Optional)"
        value={formData.postcode}
        onChange={(e) =>
          setFormData({ ...formData, postcode: e.target.value })
        }
        className={cn(
          "h-13 text-base",
          variant === "panel" && "h-12"
        )}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg shadow-md shadow-accent/20 transition-all hover:scale-[1.02] active:scale-100",
          variant === "panel" ? "h-12" : "h-14"
        )}
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
  );

  return (
    <div className="min-h-screen bg-background font-body">
      <SEO
        title={
          area.metaTitle ||
          `${area.name} Property Coatings | Kirkhall Wall Coatings`
        }
        description={
          area.metaDescription ||
          `External wall coatings, roof refurbishment, and uPVC spraying in ${area.name}. Free local surveys for ${area.postcodes.join(", ")} properties.`
        }
        canonical={`https://kirkhall-wall-coatings.co.uk/${area.slug}`}
        schema={schemas}
      />
      <TopBanner areaName={area.name} />
      <Header />
      <ScrollProgress />

      <main>
        {/* =============================================
            SECTION 1: HERO
            ============================================= */}
        <section className="relative min-h-[calc(100svh-3.5rem)] md:min-h-[calc(100svh-5rem)] flex items-start pt-8 sm:items-center sm:pt-0 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroBg}
              alt={`Professional property coatings in ${area.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/70 md:bg-gradient-to-r md:from-background md:via-background/60 md:to-background/20" />
          </div>

          {/* Subtle accent shard — hidden on mobile */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/4 z-0 hidden md:block" />

          <div className="container mx-auto px-4 md:px-8 lg:px-12 py-6 sm:py-16 md:py-32 lg:py-0 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              {/* Left — Content */}
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Breadcrumb */}
                  <nav className="flex items-center gap-2 text-muted-foreground text-sm mb-6 font-medium">
                    <Link
                      to="/"
                      className="hover:text-accent transition-colors"
                    >
                      Home
                    </Link>
                    <span className="text-muted-foreground/80">/</span>
                    <span className="text-foreground font-bold">
                      {area.name}
                    </span>
                  </nav>

                  {/* Certifications + rating strip */}
                  <div className="flex items-center gap-2 mb-3 sm:inline-flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:mb-6 sm:border sm:border-accent/40 sm:bg-accent/10 sm:px-4 sm:py-2 sm:shadow-sm sm:backdrop-blur-md">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img src={googleLogo} alt="Google" className="h-5 sm:h-7 w-auto" />
                      <img src={checkatradeLogo} alt="Checkatrade" className="h-6 sm:h-8 w-auto" />
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 stroke-black" />
                        ))}
                      </div>
                      <span className="hidden sm:inline text-sm font-semibold text-foreground">
                        5/5 on Google & Checkatrade
                      </span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h1 className="font-display inline-block text-[2rem] sm:text-4xl md:text-7xl lg:text-5xl text-foreground leading-[1.05] mb-2 tracking-tight">
                    External Wall, Roof & uPVC Coatings in{" "}<br></br>
                    <span
                      className="text-gold text-[2rem] sm:text-4xl md:text-7xl lg:text-7xl text-foreground-inverse font-bold py-2 outline-text-solid"
                    >
                     {area.name}
                    </span>
                  </h1>

                  {/* Subtext */}
                  <p className="text-lg md:text-xl lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                    {area.description ||
                      `Family-run specialists with 30+ years experience. Premium finishes, exceptionally tidy, and trusted across ${area.name}.`}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-3 sm:mb-4">
                    <Button
                      size="lg"
                      onClick={() => setShowForm(true)}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 h-14 text-lg shadow-lg shadow-accent/20 transition-all hover:scale-[1.03] active:scale-100 lg:hidden"
                    >
                      Get Your Free Quote
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                      size="lg"
                      onClick={() => {
                        document
                          .getElementById("hero-form-card")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 h-14 text-lg shadow-lg shadow-accent/20 transition-all hover:scale-[1.03] active:scale-100 hidden lg:inline-flex"
                    >
                      Get Your Free Quote
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 font-bold h-14 px-8 text-lg transition-all"
                    >
                      <a href={getPhoneLink()}>
                        <Phone className="w-5 h-5 mr-3" />
                        {siteConfig.contact.phone}
                      </a>
                    </Button>
                  </div>

                  {/* Micro-copy — urgency + reassurance */}
                  <p className="text-sm text-muted-foreground mb-6">
                    <span className="text-accent font-semibold">
                      {quotesThisWeek} quotes requested
                    </span>{" "}
                    this week
                    <span className="mx-2">·</span>
                    No obligation, 100% free
                  </p>

                  {/* Trust micro-icons */}
                  <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-accent" />
                      Fully Insured
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-accent" />
                      Reply Within 24h
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 stroke-black" />
                      100+ Happy Customers
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Right — Quick Form Card (Desktop) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden lg:block"
                id="hero-form-card"
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

                  <QuoteForm variant="light" />

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

          {/* Mobile Slide-in Form */}
          <AnimatePresence>
            {showForm && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowForm(false)}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card z-50 overflow-y-auto lg:hidden"
                >
                  <div className="p-6 border-2 border-navy h-full">
                    <button
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                      className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="pt-8">
                      <div className="w-1 h-6 bg-accent mb-4" />
                      <h2 className="font-display text-2xl text-foreground mb-2">
                        Get Your Free Quote
                      </h2>
                      <p className="text-muted-foreground text-sm mb-6">
                        We'll call you back within 24 hours
                      </p>

                      <QuoteForm variant="panel" />
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </section>

        {/* =============================================
            SECTION 2: TRUST BAR
            ============================================= */}
        <TrustBar />

        {/* =============================================
            SECTION 3: SERVICES + LOCAL EXPERTISE (MERGED)
            ============================================= */}
        <section className="py-14 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
              {/* Left — Services grid + local context */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-accent font-bold text-sm uppercase tracking-widest mb-4 block">
                    LOCAL EXPERTISE
                  </span>
                  <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6 leading-tight">
                    Our Services in{" "}
                    <span className="text-accent">{area.name}</span>
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
                    {area.localContext ||
                      `From period properties to modern builds, our team understands the prep and coating requirements of ${area.name} homes.`}
                  </p>

                  {/* Service Cards Grid */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {localProducts.map((product, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="bg-background p-8 border-2 border-border hover:border-accent transition-all group shadow-sm"
                      >
                        <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                          <product.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                          {product.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {product.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Architectural styles — compact inline detail */}
                  {area.architecturalStyles &&
                    area.architecturalStyles.length > 0 && (
                      <div className="bg-background border border-border p-6">
                        <p className="text-sm font-bold text-foreground uppercase tracking-widest mb-3">
                          Specialist knowledge of local architecture
                        </p>
                        <ul className="space-y-2">
                          {area.architecturalStyles
                            .slice(0, 2)
                            .map((style, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                                <span>
                                  <strong className="text-foreground">
                                    {style.style}
                                  </strong>{" "}
                                  — {style.description}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                </motion.div>
              </div>

              {/* Right — Testimonial + Neighborhoods */}
              <div className="lg:col-span-5 space-y-6">
                {/* Testimonial Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="bg-card border-2 border-border p-10 shadow-soft relative overflow-hidden">
                    <Quote className="w-12 h-12 text-accent/10 absolute top-8 left-8" />

                    <div className="relative">
                      <div className="flex items-center gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <p className="text-xl italic text-foreground leading-relaxed mb-8">
                        "Absolutely delighted with our newly decorated rooms.
                        The team were professional, the finish was flawless, and
                        the difference to our home in {area.name} is
                        remarkable."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                          <HomeIcon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="text-foreground font-bold text-sm uppercase tracking-wider">
                            Verified {area.name} Resident
                          </p>
                          <p className="text-accent text-xs font-bold uppercase tracking-widest">
                            Project Completed 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Compact neighborhoods list */}
                {area.neighborhoods && area.neighborhoods.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="bg-primary text-primary-foreground p-8 shadow-lg">
                      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                        Areas We Cover
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.neighborhoods.map((n, i) => (
                          <span
                            key={i}
                            className="text-sm text-white/80 bg-white/10 border border-white/10 px-3 py-1 font-medium"
                          >
                            {n}
                          </span>
                        ))}
                        {area.postcodes.map((pc, i) => (
                          <span
                            key={`pc-${i}`}
                            className="text-sm text-accent bg-accent/10 border border-accent/20 px-3 py-1 font-bold"
                          >
                            {pc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            SECTION 4: FAQ — PROPER ACCORDION
            ============================================= */}
        <section className="py-14 md:py-32 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-5 gap-6 md:gap-12 lg:gap-16">
              {/* Left — Sticky Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
              >
                <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest mb-6">
                  FAQ
                </span>
                <h2 className="font-display text-section text-foreground mb-6">
                  Questions About
                  <br />
                  <span className="text-gold-gradient">
                    Coatings in {area.name}?
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Everything you need to know about our services in {area.name}.
                  Can't find what you're looking for? Get in touch.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                  <a href={getPhoneLink()}>
                    <Phone className="w-5 h-5 mr-2" />
                    Speak to a Specialist
                  </a>
                </Button>
              </motion.div>

              {/* Right — FAQ Items */}
              <div className="lg:col-span-3 space-y-4">
                {areaFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div
                      className={cn(
                        "border-2 transition-all duration-300",
                        openFaqIndex === index
                          ? "border-accent bg-card shadow-soft"
                          : "border-border bg-card hover:border-accent/50"
                      )}
                    >
                      <button
                        onClick={() =>
                          setOpenFaqIndex(
                            openFaqIndex === index ? null : index
                          )
                        }
                        className="w-full flex items-start justify-between gap-4 p-6 text-left"
                      >
                        <span
                          className={cn(
                            "font-display text-lg font-bold transition-colors",
                            openFaqIndex === index
                              ? "text-accent"
                              : "text-foreground"
                          )}
                        >
                          {faq.q}
                        </span>
                        <div
                          className={cn(
                            "w-8 h-8 flex-shrink-0 flex items-center justify-center transition-all",
                            openFaqIndex === index
                              ? "bg-accent text-accent-foreground"
                              : "bg-muted text-foreground"
                          )}
                        >
                          {openFaqIndex === index ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {openFaqIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-0">
                              <div className="w-full h-px bg-border mb-4" />
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            SECTION 5: FINAL CTA — DARK NAVY PATTERN
            ============================================= */}
        <FinalCTA areaName={area.name} />
      </main>

      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default AreaPage;
