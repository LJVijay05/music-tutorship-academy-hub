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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				coral: {
					50: 'hsl(var(--coral-50))',
					100: 'hsl(var(--coral-100))',
					200: 'hsl(var(--coral-200))',
					300: 'hsl(var(--coral-300))',
					400: 'hsl(var(--coral-400))',
					500: 'hsl(var(--coral-500))',
					600: 'hsl(var(--coral-600))',
					700: 'hsl(var(--coral-700))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Playfair Display', 'serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.8125rem', { lineHeight: '1.5' }],
				'sm': ['0.9375rem', { lineHeight: '1.5' }],
				'base': ['1.0625rem', { lineHeight: '1.6' }],
				'lg': ['1.1875rem', { lineHeight: '1.6' }],
				'xl': ['1.3125rem', { lineHeight: '1.5' }],
				'2xl': ['1.5625rem', { lineHeight: '1.4' }],
				'3xl': ['1.875rem', { lineHeight: '1.3' }],
				'4xl': ['2.25rem', { lineHeight: '1.2' }],
				'5xl': ['3rem', { lineHeight: '1.1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(20px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(30px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-down': {
					'0%': {
						transform: 'translateY(-30px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-left': {
					'0%': {
						transform: 'translateX(50px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-right': {
					'0%': {
						transform: 'translateX(-50px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(0.95)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)' 
					},
					'50%': { 
						transform: 'translateY(-20px) rotate(10deg)' 
					}
				},
				'float-delayed': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)' 
					},
					'50%': { 
						transform: 'translateY(-15px) rotate(-5deg)' 
					}
				},
				'title-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'word-slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100px) rotateX(-90deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)'
					}
				},
				'premium-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.3)',
						transform: 'scale(1.02)'
					}
				},
				'golden-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(245, 158, 11, 0.6), 0 0 60px rgba(245, 158, 11, 0.3)',
						transform: 'scale(1.02)'
					}
				},
				'gradient-shift': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'sparkle': {
					'0%, 100%': {
						opacity: '0',
						transform: 'scale(0) rotate(0deg)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1) rotate(180deg)'
					}
				},
				'zoom-in-up': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'slide-in-bottom': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'stagger-fade': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'text-shimmer': {
					'0%': {
						backgroundPosition: '-200% center'
					},
					'100%': {
						backgroundPosition: '200% center'
					}
				},
				'button-smooth-hover': {
					'0%': {
						transform: 'scale(1) translateY(0)',
						boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
					},
					'100%': {
						transform: 'scale(1.05) translateY(-2px)',
						boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
					}
				},
				'button-press': {
					'0%': {
						transform: 'scale(1.05)'
					},
					'50%': {
						transform: 'scale(0.95)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				'ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(4)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-out': 'fade-out 0.4s ease-out forwards',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'slide-down': 'slide-down 0.6s ease-out forwards',
				'slide-left': 'slide-left 0.6s ease-out forwards',
				'slide-right': 'slide-right 0.6s ease-out forwards',
				'bounce-in': 'bounce-in 0.6s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float-delayed 8s ease-in-out infinite',
				'title-reveal': 'title-reveal 1s ease-out forwards',
				'word-slide-up': 'word-slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'premium-glow': 'premium-glow 3s ease-in-out infinite',
				'golden-glow': 'golden-glow 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'zoom-in-up': 'zoom-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'slide-in-bottom': 'slide-in-bottom 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'stagger-fade': 'stagger-fade 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'text-shimmer': 'text-shimmer 2s linear infinite',
				'button-smooth-hover': 'button-smooth-hover 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'button-press': 'button-press 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'ripple': 'ripple 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
