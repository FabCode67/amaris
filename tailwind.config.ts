import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
  			heading: ['var(--font-heading)', 'var(--font-sans)', 'ui-sans-serif', 'system-ui'],
  		},
  		boxShadow: {
  			soft: '0 4px 24px -4px rgba(15, 30, 60, 0.08)',
  			'soft-lg': '0 20px 50px -12px rgba(15, 30, 60, 0.18)',
  			glow: '0 0 0 1px rgba(51,76,123,0.06), 0 8px 30px rgba(51,76,123,0.12)',
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			medBlue: '#334C7B',
  			brand: {
  				50: '#eef2f8',
  				100: '#d7e0ee',
  				200: '#b3c3dd',
  				300: '#8aa3c9',
  				400: '#5f7cab',
  				500: '#42598c',
  				600: '#334C7B',
  				700: '#293d64',
  				800: '#213151',
  				900: '#1a2740',
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'fade-up': {
  				'0%': { opacity: '0', transform: 'translateY(24px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' },
  			},
  			'fade-in': {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' },
  			},
  		},
  		animation: {
  			'fade-up': 'fade-up 0.7s ease-out forwards',
  			'fade-in': 'fade-in 0.7s ease-out forwards',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
