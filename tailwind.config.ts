import type { Config } from "tailwindcss";

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
        bebas: ['"Bebas Neue"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        caveat: ['"Caveat"', 'cursive'],
        teenage: ['"Teenage Dreams Demo Bold"', '"Teenage Dreams Demo"', 'cursive'],
        antarctican: ['"Antarctican Mono"', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
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
        rvl: {
          creme: "hsl(var(--rvl-creme))",
          "creme-bg": "hsl(var(--rvl-creme-bg))",
          laranja: "hsl(var(--rvl-laranja))",
          vermelho: "hsl(var(--rvl-vermelho))",
          amarelo: "hsl(var(--rvl-amarelo))",
          azul: "hsl(var(--rvl-azul))",
          escuro: "hsl(var(--rvl-escuro))",
          "exp-bg": "hsl(var(--rvl-exp-bg))",
        },
        game: {
          sky: {
            top: "hsl(var(--game-sky-top))",
            mid: "hsl(var(--game-sky-mid))",
            bottom: "hsl(var(--game-sky-bottom))",
          },
          ground: "hsl(var(--game-ground))",
          sun: "hsl(var(--game-sun))",
          "sun-glow": "hsl(var(--game-sun-glow))",
          cream: "hsl(var(--game-cream))",
          red: "hsl(var(--game-red))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
