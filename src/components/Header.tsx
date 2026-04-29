import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/branding/kirkhall-logo.png";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { siteConfig, getPhoneLink, getEmailLink } from "@/data/siteConfig";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileservicesOpen, setMobileservicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getHref = (hash: string) => {
    return isHomePage ? hash : `/${hash}`;
  };

  const navLinks = [
    { href: "/about", label: "About", isRoute: true },
    { 
      href: "/services", 
      label: "Services", 
      isRoute: true,
      items: services.map(s => ({ href: `/${s.slug}`, label: s.title }))
    },
    { 
      href: "/locations",
      label: "Areas", 
      isRoute: false,
      items: areas.slice(0, 8).map(a => ({ href: `/${a.slug}`, label: a.name }))
    },
    { href: "/reviews", label: "Reviews", isRoute: true },
    { href: "/portfolio", label: "Portfolio", isRoute: true },
    { href: "/faq", label: "FAQ", isRoute: true },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-card border-b-2 border-accent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-20 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-10 md:h-16 flex items-center justify-center relative">
              <img src={logoImg} alt={siteConfig.business.name} className="h-full w-auto object-contain" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              link.items ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors duration-150 font-bold text-sm uppercase tracking-wide relative group py-1 outline-none brush-underline">
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56 bg-card border-2 border-primary shadow-soft-lg p-2">
                    <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground cursor-pointer mb-1">
                      <Link to={link.href} className="font-bold text-foreground uppercase text-sm tracking-wide">{`View All ${link.label}`}</Link>
                    </DropdownMenuItem>
                    <div className="h-0.5 bg-border my-2" />
                    {link.items.map((item) => (
                      <DropdownMenuItem key={item.href} asChild className="focus:bg-muted cursor-pointer">
                        <Link to={item.href} className="text-muted-foreground text-sm py-2 hover:text-foreground">{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                    {link.label === "Areas" && (
                      <>
                        <div className="h-0.5 bg-border my-2" />
                        <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground cursor-pointer">
                          <Link to={link.href} className="font-bold text-accent text-sm uppercase tracking-wide text-center w-full">See More →</Link>
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-foreground hover:text-accent transition-colors duration-150 font-bold text-sm uppercase tracking-wide relative group py-1 brush-underline"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-150 group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-accent transition-colors duration-150 font-bold text-sm uppercase tracking-wide relative group py-1 brush-underline"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-150 group-hover:w-full" />
                  </a>
                )
              )
            ))}
          </nav>

          {/* Phone CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-1.5 md:gap-3">
            <a
              href={getPhoneLink()}
              className="flex items-center gap-1.5 md:gap-2 bg-primary hover:bg-navy-light px-2.5 py-2 md:px-4 md:py-2.5 border-2 border-accent transition-all duration-150 group shadow-accent-cta hover:shadow-accent-cta-strong"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent-contrast" />
              <span className="text-xs md:text-base text-primary-foreground font-extrabold uppercase tracking-wider leading-none">Call</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 border-2 border-border hover:border-accent hover:bg-muted transition-all duration-150"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={cn(
            "fixed inset-0 top-14 md:top-20 bg-primary/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-200",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        <nav className={cn(
          "fixed top-14 md:top-20 right-0 bottom-0 w-[85%] max-w-sm bg-card z-50 md:hidden transform transition-transform duration-200 ease-out border-l-2 border-primary overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full">
            <div className="flex-1 py-4 px-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col">
                  {link.items ? (
                    <>
                      <button
                        onClick={() => {
                          if (link.label === "Services") setMobileservicesOpen(!mobileservicesOpen);
                          if (link.label === "Areas") setMobileAreasOpen(!mobileAreasOpen);
                        }}
                        className={cn(
                          "flex items-center justify-between text-foreground hover:text-accent transition-colors font-bold uppercase tracking-wide py-3 px-3",
                          ((link.label === "Services" && mobileservicesOpen) || (link.label === "Areas" && mobileAreasOpen)) && "text-accent bg-accent/5"
                        )}
                      >
                        {link.label}
                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", 
                          ((link.label === "Services" && mobileservicesOpen) || (link.label === "Areas" && mobileAreasOpen)) ? "rotate-180" : ""
                        )} />
                      </button>
                      <div className={cn(
                        "grid transition-all duration-200 ease-out",
                        ((link.label === "Services" && mobileservicesOpen) || (link.label === "Areas" && mobileAreasOpen)) 
                          ? "grid-rows-[1fr] opacity-100" 
                          : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="overflow-hidden flex flex-col ml-3 border-l-2 border-accent pl-3">
                          <Link
                            to={link.href}
                            className="text-foreground font-bold py-2.5 text-sm hover:text-accent transition-colors uppercase tracking-wide"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View All {link.label}
                          </Link>
                          {link.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="text-muted-foreground py-2.5 text-sm hover:text-foreground transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-foreground hover:text-accent transition-colors font-medium py-3 px-3 rounded-lg hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-foreground hover:text-accent transition-colors font-medium py-3 px-3 rounded-lg hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
            
            <div className="p-5 bg-primary mt-auto border-t-2 border-accent">
              <Link
                to="/get-quote"
                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold uppercase tracking-wide py-3.5 px-4 border-2 border-accent shadow-accent-glow transition-all hover:bg-accent/90"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
              <div className="mt-5 flex flex-col gap-3">
                <a href={getPhoneLink()} className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent-contrast transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{siteConfig.contact.phone}</span>
                </a>
                <a href={getEmailLink()} className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent-contrast transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm truncate">{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
