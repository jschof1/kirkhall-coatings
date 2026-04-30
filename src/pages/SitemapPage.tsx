import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { siteConfig } from "@/data/siteConfig";
import { Home, Wrench, MapPin, FileText, MessageSquare, Star, Phone, Percent } from "lucide-react";

const SitemapPage = () => {
  const staticPages = [
    { path: "/", label: "Home", icon: Home },
    { path: "/services", label: "All Services", icon: Wrench },
    { path: "/get-quote", label: "Get a Quote", icon: Phone },
    { path: "/reviews", label: "Customer Reviews", icon: Star },
    { path: "/feedback", label: "Leave Feedback", icon: MessageSquare },
    { path: "/discount", label: "Discount Offer", icon: Percent },
    { path: "/privacy-policy", label: "Privacy Policy", icon: FileText },
    { path: "/terms-of-service", label: "Terms of Service", icon: FileText },
  ];

  // Group areas by region
  const areasByRegion = areas.reduce((acc, area) => {
    if (!acc[area.region]) {
      acc[area.region] = [];
    }
    acc[area.region].push(area);
    return acc;
  }, {} as Record<string, typeof areas>);

  return (
    <>
      <SEO 
        title={`Sitemap | ${siteConfig.business.name}`}
        description={`Complete sitemap for ${siteConfig.business.name}. Find all our wall coating and uPVC window spraying services, service areas, and important pages.`}
        canonical={`${siteConfig.seo.siteUrl}/sitemap`}
      />

      <Header />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sitemap
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigate our complete website to find all our wall coating and uPVC window spraying services, service areas, and helpful resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Main Pages</h2>
              </div>
              <ul className="space-y-2">
                {staticPages.map((page) => (
                  <li key={page.path}>
                    <Link
                      to={page.path}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <page.icon className="w-4 h-4" />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Our Services</h2>
              </div>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/${service.slug}`}
                      className="text-muted-foreground hover:text-primary transition-colors py-1 block"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div className="bg-card rounded-xl p-6 shadow-sm border md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Service Areas</h2>
              </div>
              <div className="space-y-4">
                {Object.entries(areasByRegion).map(([region, regionAreas]) => (
                  <div key={region}>
                    <h3 className="font-medium text-foreground mb-2">{region}</h3>
                    <ul className="space-y-1 pl-2">
                      {regionAreas.map((area) => (
                        <li key={area.slug}>
                          <Link
                            to={`/${area.slug}`}
                            className="text-muted-foreground hover:text-primary transition-colors py-0.5 block text-sm"
                          >
                            {area.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* XML Sitemap Link */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Looking for our XML sitemap?{" "}
              <a
                href="/sitemap.xml"
                className="text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View sitemap.xml
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SitemapPage;
