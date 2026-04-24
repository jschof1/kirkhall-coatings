import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Slick base with sharp edges and strong borders
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-heading font-bold tracking-wide uppercase ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 border-2",
  {
    variants: {
      variant: {
        // Primary: Navy with strong border
        default: "bg-primary text-primary-foreground border-primary shadow-soft hover:bg-navy-light hover:border-navy-light active:scale-[0.98]",
        // Gold/Orange: Vibrant with border
        gold: "bg-accent text-accent-foreground border-accent shadow-accent-glow hover:bg-accent/90 hover:border-accent/90 active:scale-[0.98]",
        paint: "btn-paint active:scale-[0.98]",
        // Gold outline - strong border
        "gold-outline": "border-3 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground",
        // Gold pulse - same as gold
        "gold-pulse": "bg-accent text-accent-foreground border-accent shadow-accent-glow hover:bg-accent/90",
        destructive: "bg-destructive text-destructive-foreground border-destructive hover:bg-destructive/90",
        // Outlined - strong border
        outline: "border-3 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground border-border hover:bg-muted",
        ghost: "border-transparent hover:bg-muted hover:text-foreground hover:border-border",
        link: "text-primary underline-offset-4 hover:underline border-transparent",
      },
      size: {
        default: "h-12 px-6 py-2.5",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
