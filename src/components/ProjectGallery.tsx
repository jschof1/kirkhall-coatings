import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowUpRight, MapPin, Maximize2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  areaName?: string;
}

const ProjectGallery = ({ areaName }: ProjectGalleryProps) => {
  const displayArea = areaName || siteConfig.serviceArea.primary;
  // Show first 6 projects for gallery preview (fits 3-col grid evenly)
  const displayProjects = projects.slice(0, 6);

  return (
    <section id="gallery" className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -ml-32 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -mr-32 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              Our Portfolio
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-4xl text-foreground mb-4 leading-[1.1] animate-fade-in">
              Recent Projects <br />
              <span className="text-primary">in {displayArea}</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed animate-fade-in [animation-delay:100ms]">
              Take a look at the quality of our craftsmanship. From interior redecorations to premium exterior finishes, we bring excellence to every home in {displayArea}.
            </p>
          </div>
          
          <div className="hidden md:block animate-fade-in [animation-delay:200ms]">
            <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-xl px-6 h-12 group transition-all duration-300">
              <a href="#contact" className="flex items-center gap-2">
                View All Work
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayProjects.map((project, index) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.slug}
              className={cn(
                "group relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in"
              )}
              style={{ animationDelay: `${0.1 * (index + 2)}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Floating Tags */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <span className="inline-flex bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 rounded-md shadow-lg">
                    {project.tag}
                  </span>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                  <Maximize2 className="w-5 h-5" strokeWidth={3} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </div>
                <h3 className="font-display font-black text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                
                <div className="flex items-center text-primary font-bold group-hover:gap-2 transition-all duration-300 w-fit">
                  <span className="relative text-[10px] uppercase tracking-widest">
                    View Details
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in [animation-delay:600ms]">
          <div className="inline-block p-1 rounded-[1.5rem] bg-secondary/50 backdrop-blur-sm border border-border">
            <div className="px-6 py-8 md:px-12 md:py-10 rounded-[1.25rem] bg-card border border-border shadow-inner text-center max-w-3xl mx-auto">
              <h3 className="font-display font-black text-xl md:text-2xl text-foreground mb-3">
                Ready to transform your home?
              </h3>
              <p className="text-muted-foreground text-base mb-6 max-w-lg mx-auto">
                Join hundreds of satisfied homeowners in {displayArea}. Get a professional quote for your next home improvement project today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 px-8 rounded-xl shadow-lg shadow-primary/20 group">
                  <a href="#contact" className="flex items-center gap-2">
                    Start Your Project
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="font-bold h-12 px-6 rounded-xl hover:bg-primary/5">
                  <a href={getPhoneLink()} className="flex items-center gap-2 text-sm">
                    Call: {siteConfig.contact.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
