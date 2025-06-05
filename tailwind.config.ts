
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        inter: ['Inter', 'sans-serif'],
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Enhanced animations for premium feel
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(100px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in-from-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "slide-in-from-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "slide-in-from-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in-from-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "zoom-in-up": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95) translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)"
          }
        },
        "slide-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "slide-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "stagger-fade": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.95)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)"
          }
        },
        "bounce-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3)"
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05)"
          },
          "70%": {
            transform: "scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)"
          },
          "50%": {
            transform: "translateY(-20px) rotate(180deg)"
          }
        },
        "float-delayed": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)"
          },
          "50%": {
            transform: "translateY(-30px) rotate(-180deg)"
          }
        },
        "sparkle": {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "1"
          },
          "50%": {
            transform: "scale(1.2) rotate(180deg)",
            opacity: "0.8"
          }
        },
        "premium-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)"
          },
          "50%": {
            boxShadow: "0 0 40px rgba(220, 38, 38, 0.5), 0 0 60px rgba(220, 38, 38, 0.2)"
          }
        },
        "golden-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)"
          },
          "50%": {
            boxShadow: "0 0 40px rgba(245, 158, 11, 0.5), 0 0 60px rgba(245, 158, 11, 0.2)"
          }
        },
        "text-shimmer": {
          "0%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
          "100%": {
            backgroundPosition: "0% 50%"
          }
        },
        "title-reveal": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px) scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)"
          }
        },
        "word-slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(100px) rotateX(90deg)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) rotateX(0deg)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-bottom": "slide-in-bottom 0.8s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.8s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.8s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.6s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.6s ease-out",
        "zoom-in-up": "zoom-in-up 0.8s ease-out",
        "slide-left": "slide-left 0.8s ease-out",
        "slide-right": "slide-right 0.8s ease-out",
        "stagger-fade": "stagger-fade 0.6s ease-out",
        "bounce-in": "bounce-in 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 8s ease-in-out infinite",
        "sparkle": "sparkle 3s ease-in-out infinite",
        "premium-glow": "premium-glow 2s ease-in-out infinite",
        "golden-glow": "golden-glow 2s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "title-reveal": "title-reveal 1s ease-out",
        "word-slide-up": "word-slide-up 0.8s ease-out"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
