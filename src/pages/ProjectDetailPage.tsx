import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { getProjectBySlug, getRelatedProjects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Shield, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft,
  Quote,
  Package,
  Phone,
  ArrowUpRight
} from "lucide-react";
import NotFound from "./NotFound";

const ProjectDetailPage = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();

  if (projectSlug === "roof-refurbishment-airdrie") {
    return <Navigate to="/projects/upvc-window-respray-airdrie" replace />;
  }

  const project = projectSlug ? getProjectBySlug(projectSlug) : undefined;

  if (!project) {
    return <NotFound />;
  }

  const relatedProjects = getRelatedProjects(project.relatedProjects);
  const canonicalUrl = `${siteConfig.seo.siteUrl}/projects/${project.slug}`;
  const projectImageUrl = project.image.startsWith("http")
    ? project.image
    : `${siteConfig.seo.siteUrl}${project.image}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "description": project.shortDescription,
    "image": [projectImageUrl],
    "author": {
      "@type": "Organization",
      "name": siteConfig.business.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.business.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.seo.siteUrl}/kirkhall-logo-dark.svg`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    "articleSection": project.tag,
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
        "name": "Portfolio",
        "item": `${siteConfig.seo.siteUrl}/portfolio`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": canonicalUrl,
      },
    ],
  };

  return (
    <>
      <SEO 
        title={`${project.title} | ${siteConfig.business.name}`}
        description={`${project.shortDescription} View our ${project.tag.toLowerCase()} project in ${project.location}.`}
        image={project.image}
        canonical={canonicalUrl}
        type="article"
        schema={[articleSchema, breadcrumbSchema]}
      />

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-secondary to-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal variant="fade-up">
              <Link 
                to="/#gallery" 
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-6 hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <ScrollReveal variant="fade-right">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                    {project.tag}
                  </div>
                  
                  <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                    {project.title}
                  </h1>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">{project.location}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center p-4 rounded-xl bg-card border border-border">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Duration</p>
                      <p className="font-bold text-foreground">{project.details.duration}</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-card border border-border">
                      <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Warranty</p>
                      <p className="font-bold text-foreground">{project.details.warranty}</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-card border border-border">
                      <Package className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Type</p>
                      <p className="font-bold text-foreground text-sm">{project.details.projectType.split(' ')[0]}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-left" delay={200}>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  </div>
                  {/* Floating accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl -z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Full Description */}
                <ScrollReveal variant="fade-up">
                  <div>
                    <h2 className="font-display font-black text-2xl md:text-3xl text-foreground mb-6">
                      Project Overview
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>
                </ScrollReveal>

                {/* Features/Work Done */}
                <ScrollReveal variant="fade-up" delay={100}>
                  <div>
                    <h2 className="font-display font-black text-2xl md:text-3xl text-foreground mb-6">
                      Work Completed
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Gallery */}
                <ScrollReveal variant="fade-up" delay={200}>
                  <div>
                    <h2 className="font-display font-black text-2xl md:text-3xl text-foreground mb-6">
                      Project Gallery
                    </h2>
                    <div className="grid grid-cols-3 gap-4">
                      {project.gallery.map((image, index) => (
                        <div 
                          key={index}
                          className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer"
                        >
                          <img 
                            src={image} 
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Testimonial */}
                {project.testimonial && (
                  <ScrollReveal variant="fade-up" delay={300}>
                    <div className="relative p-8 rounded-2xl bg-primary text-primary-foreground">
                      <Quote className="w-12 h-12 opacity-20 absolute top-6 right-6" />
                      <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 relative z-10">
                        "{project.testimonial.quote}"
                      </blockquote>
                      <cite className="font-bold not-italic">
                        — {project.testimonial.author}
                      </cite>
                    </div>
                  </ScrollReveal>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <ScrollReveal variant="fade-left">
                  <div className="sticky top-28 space-y-6">
                    {/* Materials Used */}
                    <div className="p-6 rounded-2xl bg-card border border-border">
                      <h3 className="font-display font-bold text-lg text-foreground mb-4">
                        Materials Used
                      </h3>
                      <ul className="space-y-3">
                        {project.details.materials.map((material, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Card */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                      <h3 className="font-display font-bold text-xl mb-3">
                        Want Similar Results?
                      </h3>
                      <p className="text-primary-foreground/80 mb-6">
                        Get a free quote for your project today. We serve {project.area} and surrounding areas.
                      </p>
                      <div className="space-y-3">
                        <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                          <Link to="/get-quote" className="flex items-center justify-center gap-2">
                            Get Free Quote
                            <ChevronRight className="w-5 h-5" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20 font-bold">
                          <a href={getPhoneLink()} className="flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            {siteConfig.contact.phone}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-12 md:py-20 bg-secondary">
            <div className="container mx-auto px-4">
              <ScrollReveal variant="fade-up">
                <h2 className="font-display font-black text-2xl md:text-3xl text-foreground mb-8 text-center">
                  Similar Projects
                </h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject, index) => (
                  <ScrollReveal key={relatedProject.slug} variant="fade-up" delay={index * 100}>
                    <Link 
                      to={`/projects/${relatedProject.slug}`}
                      className="group block rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={relatedProject.image} 
                          alt={relatedProject.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 rounded-md">
                            {relatedProject.tag}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-2">
                          <MapPin className="w-3.5 h-3.5" />
                          {relatedProject.location}
                        </div>
                        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                          {relatedProject.title}
                        </h3>
                        <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest">
                          View Project
                          <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <MobileCallButton />
    </>
  );
};

export default ProjectDetailPage;
