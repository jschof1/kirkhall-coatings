import SEO from "@/components/SEO";
import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import ScrollProgress from "@/components/ScrollProgress";
import FinalCTA from "@/components/FinalCTA";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Tag, ChevronRight, X, Calendar, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Image Imports
import portfolioHeroBg from "@/assets/kirkhall/kirkhall-hero-external-wall-coating-16x9.jpeg";

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-cream-warm/20">
      <SEO 
        title="Our Portfolio | Kirkhall Wall Coatings"
        description="Explore external wall coatings and uPVC window and door spraying projects across Motherwell, North Lanarkshire, and Glasgow."
        canonical={`${siteConfig.seo.siteUrl}/portfolio`}
      />

      <ScrollProgress />
      <TopBanner />
      <Header />
      <PromoBanner />

      <main>
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-charcoal overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${portfolioHeroBg})` }}
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge className="bg-accent text-accent-foreground font-bold uppercase tracking-widest mb-4 rounded-none px-4 py-1">
                Our Work
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display text-white mb-4 md:mb-6 leading-tight tracking-tight">
                Project <span className="text-accent">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
                Explore recent Kirkhall projects across Motherwell, North Lanarkshire, and Glasgow, including external wall coatings and uPVC window and door spraying.
              </p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 -mb-32 -mr-32 rounded-full blur-3xl" />
        </section>

        {/* Portfolio Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-2 border-charcoal shadow-industrial transition-all duration-500 group-hover:shadow-industrial-gold group-hover:-translate-y-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Badge className="bg-gold text-charcoal rounded-none mb-2 font-heading font-bold uppercase tracking-tighter text-[10px]">
                        {project.tag}
                      </Badge>
                      <h3 className="text-xl font-heading font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center text-white/80 text-sm font-medium">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 text-gold" />
                        {project.location}
                      </div>
                      <div className="mt-4 flex items-center text-gold font-heading font-bold uppercase tracking-widest text-xs">
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Tag badge for mobile/non-hover */}
                  <div className="absolute top-4 left-4 md:hidden group-hover:hidden transition-opacity">
                    <Badge className="bg-charcoal/80 text-gold border-gold/50 rounded-none font-heading font-bold uppercase tracking-tighter text-[10px]">
                      {project.tag}
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-charcoal group-hover:text-gold transition-colors">{project.title}</h3>
                    <p className="text-charcoal/60 text-sm font-medium">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
      <MobileCallButton />

      {/* Project Detail Modal / Micro-interaction */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-charcoal/90 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.slug}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white border-2 border-charcoal shadow-industrial-gold overflow-hidden flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white border-2 border-charcoal hover:bg-gold transition-colors shadow-industrial-sm"
                aria-label="Close project details"
              >
                <X className="w-6 h-6 text-charcoal" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-charcoal">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal to-transparent md:hidden">
                   <Badge className="bg-gold text-charcoal rounded-none mb-2 font-heading font-bold uppercase tracking-tighter">
                    {selectedProject.tag}
                  </Badge>
                  <h2 className="text-2xl font-heading font-bold text-white">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto bg-white">
                <div className="hidden md:block mb-6">
                  <Badge className="bg-gold text-charcoal rounded-none mb-4 font-heading font-bold uppercase tracking-widest px-3 py-1">
                    {selectedProject.tag}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-2 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center text-charcoal/60 font-bold uppercase tracking-wider text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-gold" />
                    {selectedProject.location}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center text-charcoal font-heading font-bold uppercase tracking-widest text-sm mb-3">
                      <Info className="w-4 h-4 mr-2 text-gold" />
                      Project Overview
                    </h4>
                    <p className="text-charcoal/80 leading-relaxed font-medium">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-cream-warm/30 border border-charcoal/5">
                      <div className="flex items-center text-charcoal/40 mb-1">
                        <Calendar className="w-3.5 h-3.5 mr-2" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Duration</span>
                      </div>
                      <div className="text-charcoal font-heading font-bold">{selectedProject.details.duration}</div>
                    </div>
                    <div className="p-4 bg-cream-warm/30 border border-charcoal/5">
                      <div className="flex items-center text-charcoal/40 mb-1">
                        <Shield className="w-3.5 h-3.5 mr-2" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Warranty</span>
                      </div>
                      <div className="text-charcoal font-heading font-bold">{selectedProject.details.warranty}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center text-charcoal font-heading font-bold uppercase tracking-widest text-sm mb-4">
                      <Tag className="w-4 h-4 mr-2 text-gold" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedProject.features.slice(0, 6).map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-charcoal/80 font-medium">
                          <span className="w-1.5 h-1.5 bg-gold mt-1.5 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-charcoal text-white hover:bg-charcoal/90 rounded-none font-heading font-bold uppercase tracking-widest h-12 px-8 shadow-industrial transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                      <a href={`/projects/${selectedProject.slug}`}>View Full Case Study</a>
                    </Button>
                    <Button variant="outline" asChild className="border-2 border-charcoal rounded-none font-heading font-bold uppercase tracking-widest h-12 px-8 hover:bg-charcoal hover:text-white transition-all">
                      <a href="/get-quote">Get Similar Quote</a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
