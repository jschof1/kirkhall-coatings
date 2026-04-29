import { useState, useEffect, useRef } from "react";
import SEO from "@/components/SEO";
import { Link, useSearchParams } from "react-router-dom";
import { Phone, Clock, Shield, CheckCircle2, ChevronRight, ChevronLeft, Loader2, Home, Layers, Sun, Square, Grid3X3, Maximize, Paintbrush, Sparkles, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { formatPhoneNumber } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, getPhoneLink, getEmailLink } from "@/data/siteConfig";

const serviceOptions = [
  { id: "external-wall-coatings", label: "External Wall Coatings", icon: Home, description: "Repair, prep and protective coatings" },
  { id: "roof-refurbishment", label: "Roof Refurbishment", icon: Paintbrush, description: "Clean, repair and roof coating systems" },
  { id: "upvc-spraying", label: "uPVC Spraying", icon: Layers, description: "Windows, doors, fascias and trims" },
  { id: "surface-preparation", label: "Surface Preparation", icon: Sparkles, description: "Defect repair and substrate prep" },
  { id: "commercial-coatings", label: "Commercial Coatings", icon: Briefcase, description: "Commercial units and multi-property work" },
  { id: "other", label: "Other / Multiple", icon: Maximize, description: "Bespoke requirements" },
];

const urgencyOptions = [
  { id: "urgent", label: "Within 2 Weeks", description: "Need it quickly", color: "bg-gold" },
  { id: "planned", label: "1-2 Months", description: "Planning ahead", color: "bg-trust-green" },
  { id: "browsing", label: "Just Browsing", description: "Getting ideas", color: "bg-muted-foreground" },
];

const propertyOptions = [
  { id: "house", label: "House" },
  { id: "flat", label: "Flat/Apartment" },
  { id: "commercial", label: "Commercial" },
];

const GetQuotePage = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  // Initialize form data from query parameters
  const [formData, setFormData] = useState(() => {
    const validServices = serviceOptions.map(s => s.id);
    const validUrgencies = urgencyOptions.map(u => u.id);
    const validProperties = propertyOptions.map(p => p.id);
    
    const serviceParam = searchParams.get("service") || "";
    const urgencyParam = searchParams.get("urgency") || "";
    const propertyParam = searchParams.get("property") || "";
    
    return {
      service: validServices.includes(serviceParam) ? serviceParam : "",
      urgency: validUrgencies.includes(urgencyParam) ? urgencyParam : "",
      propertyType: validProperties.includes(propertyParam) ? propertyParam : "",
      description: searchParams.get("description") || "",
      name: searchParams.get("name") || "",
      phone: searchParams.get("phone") || "",
      email: searchParams.get("email") || "",
      postcode: searchParams.get("postcode") || "",
    };
  });

  // Auto-scroll to form on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const totalSteps = 3;

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.service && formData.urgency;
      case 2:
        return formData.propertyType;
      case 3:
        return formData.name && formData.phone && formData.postcode;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.postcode.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        siteConfig.webhooks.quote,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            phone: formatPhoneNumber(formData.phone.trim()),
            email: formData.email.trim(),
            postcode: formData.postcode.trim(),
            service: formData.service,
            urgency: formData.urgency,
            propertyType: formData.propertyType,
            description: formData.description.trim(),
            source: "website_quote_page",
          }),
        }
      );

      if (response.ok) {
        setStep(4); // Success step
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title={`Get a Free Quote ${siteConfig.seo.titleSuffix}`}
        description={`Get a free, no-obligation quote for external wall coatings, roof refurbishment, and uPVC spraying. Fast response across Motherwell, North Lanarkshire, and Glasgow.`}
        canonical="https://kirkhall-wall-coatings.co.uk/get-quote"
      />

      <Header />

      <main className="min-h-screen bg-gradient-to-b from-secondary via-background to-secondary">
        {/* Compact Header Section */}
        <section ref={formRef} className="relative pt-4 pb-2 md:pt-8 md:pb-4 overflow-hidden scroll-mt-16">
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-3 py-1.5 rounded-full text-sm font-medium mb-2 border-2 border-navy">
                <Clock className="w-3 h-3" />
                Takes less than 2 minutes
              </div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
                Get Your Free Quote
              </h1>
              {/* Trust Indicators - inline on mobile */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-trust-green" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-gold" />
                  <span>Reliable Service</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-gold" />
                  <span>Premium Finishes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-8 md:pb-16 pt-4">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto">
              {/* Progress Bar - compact */}
              {step <= totalSteps && (
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                    <span>Step {step} of {totalSteps}</span>
                    <span>{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <Progress
                    value={(step / totalSteps) * 100}
                    className="h-1.5 bg-muted"
                    indicatorClassName="bg-gradient-to-r from-gold to-gold-light duration-500 ease-out"
                  />
                </div>
              )}

              {/* Form Card */}
              <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                {/* Step 1: Service & Urgency */}
                {step === 1 && (
                  <div className="p-4 md:p-6">
                    <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-4">
                      What are you looking for?
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {serviceOptions.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => updateField("service", service.id)}
                          className={`p-3 rounded-lg border-2 text-left transition-all active:scale-[0.98] ${
                            formData.service === service.id
                              ? "border-gold bg-gold/10"
                              : "border-border bg-background"
                          }`}
                        >
                          <service.icon className={`w-5 h-5 mb-1.5 ${formData.service === service.id ? "text-gold" : "text-muted-foreground"}`} />
                          <div className="font-semibold text-xs text-foreground">{service.label}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">{service.description}</div>
                        </button>
                      ))}
                    </div>

                    <h3 className="font-display text-base font-semibold text-foreground mb-3">
                      When do you need this?
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {urgencyOptions.map((urgency) => (
                        <button
                          key={urgency.id}
                          onClick={() => updateField("urgency", urgency.id)}
                          className={`p-3 rounded-lg border-2 text-center transition-all active:scale-[0.98] ${
                            formData.urgency === urgency.id
                              ? "border-gold bg-gold/10"
                              : "border-border bg-background"
                          }`}
                        >
                          <div className={`w-2.5 h-2.5 rounded-full ${urgency.color} mx-auto mb-1.5`} />
                          <div className="font-semibold text-xs text-foreground">{urgency.label}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">{urgency.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Property & Description */}
                {step === 2 && (
                  <div className="p-4 md:p-6">
                    <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-4">
                      Tell us about your property
                    </h2>
                    
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {propertyOptions.map((property) => (
                        <button
                          key={property.id}
                          onClick={() => updateField("propertyType", property.id)}
                          className={`p-3 rounded-lg border-2 text-center transition-all active:scale-[0.98] ${
                            formData.propertyType === property.id
                              ? "border-gold bg-gold/10"
                              : "border-border bg-background"
                          }`}
                        >
                          <div className="font-semibold text-sm text-foreground">{property.label}</div>
                        </button>
                      ))}
                    </div>

                    <h3 className="font-display text-base font-semibold text-foreground mb-3">
                      Any specific requirements? (optional)
                    </h3>
                    
                    <textarea
                      value={formData.description}
                      onChange={(e) => updateField("description", e.target.value)}
                      placeholder="E.g., External wall coating on a semi-detached, uPVC windows need respraying..."
                      className="w-full h-24 p-3 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    />
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <div className="p-4 md:p-6">
                    <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-1">
                      How can we reach you?
                    </h2>
                    <p className="text-xs text-muted-foreground mb-4">We'll be in touch within 24 hours.</p>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          placeholder="John Smith"
                          className="w-full p-3 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          placeholder="07123 456789"
                          className="w-full p-3 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1.5">Email (optional)</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateField("email", e.target.value)}
                            placeholder="john@email.com"
                            className="w-full p-3 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs font-medium text-foreground mb-1.5">Postcode *</label>
                          <input
                            type="text"
                            value={formData.postcode}
                            onChange={(e) => updateField("postcode", e.target.value)}
                            placeholder="DA1 1AB"
                            className="w-full p-3 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Success */}
                {step === 4 && (
                  <div className="p-6 md:p-10 text-center">
                    <div className="w-16 h-16 bg-trust-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-trust-green" />
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                      Quote Request Received!
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                      Thanks {formData.name.split(" ")[0]}! We'll be in touch within 24 hours. For an <span className="font-bold text-primary">instant response</span>, call us now.
                    </p>
                    <div className="flex flex-col gap-3">
                      <Button asChild className="bg-gold hover:bg-gold/90 text-gold-foreground font-bold w-full h-14 text-lg shadow-industrial-gold">
                        <a href={getPhoneLink()}>
                          <Phone className="mr-2 h-5 w-5" />
                          CALL US NOW
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/">Back to Home</Link>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                {step <= totalSteps && (
                  <div className="px-4 md:px-6 py-3 bg-muted/50 border-t border-border flex justify-between items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setStep(prev => prev - 1)}
                      disabled={step === 1}
                      className={step === 1 ? "invisible" : ""}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Back
                    </Button>

                    {step < totalSteps ? (
                      <Button
                        onClick={() => setStep(prev => prev + 1)}
                        disabled={!canProceed()}
                        className="bg-gold hover:bg-gold/90 text-gold-foreground font-bold"
                      >
                        Continue
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        disabled={!canProceed() || isSubmitting}
                        className="bg-gold hover:bg-gold/90 text-gold-foreground font-bold"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Get My Quote
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* Alternative Contact */}
              {step <= totalSteps && (
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Need an instant quote?
                  </p>
                  <a
                    href={getPhoneLink()}
                    className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest hover:text-gold transition-colors text-lg"
                  >
                    <Phone className="w-5 h-5 text-gold" strokeWidth={3} />
                    Call {siteConfig.contact.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GetQuotePage;