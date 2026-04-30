import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";
import { Phone, ArrowRight, Paintbrush, Shield, Star, Users } from "lucide-react";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse leaves the top of the viewport (intent to close tab/window)
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        // Store in session storage to avoid showing multiple times in one session
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Check if it has already been shown in this session
    const isAlreadyShown = sessionStorage.getItem("exitIntentShown");
    if (isAlreadyShown) {
      setHasShown(true);
    } else {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <div className="relative bg-white overflow-hidden shadow-2xl">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-accent/80" />
          
          <div className="p-8 pt-10">
            <DialogHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-accent/10 flex items-center justify-center mb-2">
                <Paintbrush className="w-8 h-8 text-accent" />
              </div>
              <DialogTitle className="text-3xl font-bold text-foreground leading-tight">
                Wait! Get Your <span className="text-accent">Free Quote</span> Today
              </DialogTitle>
              <DialogDescription className="text-lg text-muted-foreground">
                Transform your home with Motherwell's trusted wall coating specialists. Get a no-obligation quote for your external wall coatings or uPVC window and door spraying project.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8 space-y-4">
              <a href="#contact" onClick={handleClose}>
                <Button className="w-full h-14 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:scale-[1.02]">
                  Get My Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              
              <div className="flex items-center justify-center gap-4 py-2">
                <div className="h-px flex-1 bg-border" />
                <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Or call us</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="block">
                <Button variant="outline" className="w-full h-14 text-lg font-semibold border-2 border-border text-foreground hover:bg-muted transition-all">
                  <Phone className="mr-2 w-5 h-5 text-accent" /> {siteConfig.contact.phone}
                </Button>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-foreground">30+</span>
                </div>
                <span className="text-[10px] uppercase tracking-tighter text-muted-foreground font-bold">Years Exp</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-foreground">5.0</span>
                  <Star className="w-4 h-4 fill-accent text-accent" />
                </div>
                <span className="text-[10px] uppercase tracking-tighter text-muted-foreground font-bold">Google Rating</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Shield className="w-5 h-5 text-trust" />
                </div>
                <span className="text-[10px] uppercase tracking-tighter text-muted-foreground font-bold">Fully Insured</span>
              </div>
            </div>
            
            {/* Extra trust line */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              Family-run business • Exceptionally tidy • Premium finishes
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
