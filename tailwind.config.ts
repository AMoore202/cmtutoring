import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'DEFAULT': '#2A4F60',
  				'light': '#396C83',
  				'dark': '#1A323C',
  				'darkest': '#0B1519',
  			},
            foreground: 'var(--foreground)',
            footer: '#1D1F20',
            footerSubtle: '#2B2C2C',
  		},
  		boxShadow: {
  			button: 'var(--shadow-button)',
  		},
        fontFamily: {
  			sans: ['var(--font-inter)', 'sans-serif'],
  			akatab: ['var(--font-akatab)', 'sans-serif'],
        }
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;
