import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        heading: ['"Manrope"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      fontSize: {
        // Dramatic scale
        'display': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '900' }],
        'display-sm': ['clamp(2rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'section': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' }],
      },
      letterSpacing: {
        'industrial': '-0.02em',
        'wide-industrial': '0.1em',
        'editorial': '-0.04em',
      },
      colors: {
        border: "hsl(var(--border))",
        "border-light": "hsl(var(--border-light))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        "background-alt": "hsl(var(--background-alt))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Navy
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          dark: "hsl(var(--charcoal-dark))",
          light: "hsl(var(--charcoal-light))",
        },
        slate: {
          DEFAULT: "hsl(var(--slate))",
          dark: "hsl(var(--slate-dark))",
          light: "hsl(var(--slate-light))",
        },
        navy: {
          DEFAULT: "hsl(var(--navy))",
          dark: "hsl(var(--navy-dark))",
          light: "hsl(var(--navy-light))",
        },
        // Warm orange
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
          foreground: "hsl(var(--gold-foreground))",
          bright: "hsl(var(--gold-bright))",
          shimmer: "hsl(var(--gold-shimmer))",
        },
        orange: {
          DEFAULT: "hsl(var(--orange))",
          light: "hsl(var(--orange-light))",
          dark: "hsl(var(--orange-dark))",
          foreground: "hsl(var(--orange-foreground))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          warm: "hsl(var(--cream-warm))",
        },
        trust: "hsl(var(--trust-green))",
        warning: "hsl(var(--warning-orange))",
        section: {
          light: "hsl(var(--section-light))",
          dark: "hsl(var(--section-dark))",
          alt: "hsl(var(--section-alt))",
          accent: "hsl(var(--section-accent))",
        },
      },
      // Sharp edges
      borderRadius: {
        lg: "0px",
        md: "0px",
        sm: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
        DEFAULT: "0px",
      },
      borderWidth: {
        "3": "3px",
        "4": "4px",
        "5": "5px",
        "6": "6px",
      },
      boxShadow: {
        'soft': '0 2px 8px -2px hsl(var(--primary) / 0.08), 0 4px 16px -4px hsl(var(--primary) / 0.12)',
        'soft-sm': '0 1px 4px -1px hsl(var(--primary) / 0.06), 0 2px 8px -2px hsl(var(--primary) / 0.08)',
        'soft-lg': '0 4px 16px -4px hsl(var(--primary) / 0.1), 0 8px 32px -8px hsl(var(--primary) / 0.15)',
        'soft-xl': '0 8px 24px -6px hsl(var(--primary) / 0.12), 0 16px 48px -12px hsl(var(--primary) / 0.18)',
        'elevated': '0 8px 30px -8px hsl(var(--primary) / 0.15), 0 16px 50px -16px hsl(var(--primary) / 0.2)',
        'accent-glow': '0 4px 30px -4px hsl(var(--accent) / 0.4)',
        'dramatic': '0 25px 50px -12px hsl(var(--primary) / 0.25), 0 12px 24px -8px hsl(var(--primary) / 0.15)',
        'editorial': '0 20px 40px -15px hsl(var(--primary) / 0.15)',
        // Legacy
        'brutal': '0 4px 16px -4px hsl(var(--primary) / 0.1), 0 8px 32px -8px hsl(var(--primary) / 0.15)',
        'brutal-sm': '0 2px 8px -2px hsl(var(--primary) / 0.08)',
        'brutal-lg': '0 8px 24px -6px hsl(var(--primary) / 0.12)',
        'brutal-xl': '0 8px 30px -8px hsl(var(--primary) / 0.15)',
        'brutal-accent': '0 4px 30px -4px hsl(var(--accent) / 0.4)',
        'industrial': '0 4px 16px -4px hsl(var(--primary) / 0.1)',
        'industrial-sm': '0 2px 8px -2px hsl(var(--primary) / 0.08)',
        'industrial-gold': '0 4px 30px -4px hsl(var(--accent) / 0.4)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(var(--accent) / 0.4)" },
          "50%": { boxShadow: "0 0 20px 10px hsl(var(--accent) / 0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-right": "slide-in-right 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-left": "slide-in-left 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
