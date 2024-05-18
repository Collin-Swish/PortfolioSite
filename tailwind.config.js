/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        'sm': '300px',
            // => @media (min-width: 576px) { ... }
      
            'md': '960px',
            // => @media (min-width: 960px) { ... }
      
            'lg': '1440px',
            // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}