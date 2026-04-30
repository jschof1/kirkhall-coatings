import { Phone, MapPin, Clock, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import logoImg from "@/assets/branding/kirkhall-logo.png";
import visaIcon from "@/assets/icons/payment/visa-202311.svg";
import mastercardIcon from "@/assets/icons/payment/mastercard-202311.svg";
import amexIcon from "@/assets/icons/payment/amex-202311.svg";
import maestroIcon from "@/assets/icons/payment/maestro-202311.svg";
import { siteConfig, getPhoneLink } from "@/data/siteConfig";
import { motion } from "framer-motion";

const Footer = () => {
  const popularAreas = areas.slice(0, 6);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-editorial text-primary-foreground relative overflow-hidden">
      {/* Accent line */}
      <div className="h-1 bg-accent" />
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        {/* Top Section - Large Phone Number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 pb-16 border-b border-primary-foreground/10"
        >
          <img 
            src={logoImg} 
            alt={siteConfig.business.name} 
            className="h-14 md:h-20 w-auto mx-auto mb-6 md:mb-8 opacity-95" 
          />
          <p className="text-primary-foreground/60 text-lg mb-6 max-w-md mx-auto">
            External wall coatings and uPVC window and door spraying across {siteConfig.serviceArea.primary}
          </p>
          <a
            href={getPhoneLink()}
            className="inline-flex items-center gap-4 group"
          >
            <div className="w-16 h-16 bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-accent-foreground" />
            </div>
            <span className="font-display text-xl sm:text-3xl md:text-4xl text-primary-foreground font-black group-hover:text-accent transition-colors">
              {siteConfig.contact.phone}
            </span>
          </a>
        </motion.div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
        {/* Services */}
        <div>
          <h4 className="font-display text-lg mb-6 text-accent font-black uppercase tracking-wide">
            Our Services
          </h4>
          <ul className="space-y-3">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link 
                  to={`/${service.slug}`} 
                  className="text-primary-foreground/60 hover:text-accent transition-colors text-sm font-medium inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-accent group-hover:w-4 transition-all" />
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

          {/* Areas */}
          <div>
            <h4 className="font-display text-lg mb-6 text-accent font-black uppercase tracking-wide">
              Areas We Cover
            </h4>
            <ul className="space-y-3">
              {popularAreas.map((area) => (
                <li key={area.slug}>
                  <Link 
                    to={`/${area.slug}`} 
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm font-medium inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all" />
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg mb-6 text-accent font-black uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/reviews", label: "Reviews" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/faq", label: "FAQ" },
                { to: "/get-quote", label: "Get a Quote" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm font-medium inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-display text-lg mb-6 text-accent font-black uppercase tracking-wide">
              Opening Hours
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground font-bold mb-0.5">Mon-Fri: {siteConfig.hours.weekday}</p>
                  <p className="text-primary-foreground/60">Sat: {siteConfig.hours.saturday}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground font-bold">Serving {siteConfig.serviceArea.primary}</p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-8">
              <p className="text-xs text-primary-foreground/40 mb-3 uppercase tracking-wide font-bold">We accept</p>
              <div className="flex flex-wrap gap-2">
                {[visaIcon, mastercardIcon, amexIcon, maestroIcon].map((icon, i) => (
                  <div key={i} className="h-8 w-12 bg-white/10 flex items-center justify-center p-1.5 border border-white/20">
                    <img src={icon} alt="Payment" className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/40">
            <p className="font-medium">© {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.</p>
            <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end pr-16 md:pr-24">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors font-medium">Privacy</Link>
              <Link to="/terms-of-service" className="hover:text-accent transition-colors font-medium">Terms</Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors font-medium">Sitemap</Link>
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 bg-accent/20 border border-accent/40 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
