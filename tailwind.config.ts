import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0F0F0F',
        gray: '#ADADAD',
        green: '#DAFF00',
        darkgray: '#808080',
        darkMetal: '#292929',
        sandstone: '#7A7663'
      },
      maxWidth: {
        '1440': '1440px',
      },
      fontSize: {
        'custom-32': '2rem',
        'custom-22': '1.375rem'
      },
      lineHeight: {
        'custom-22': '1.375rem',
        'custom-18': '1.125rem'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      padding: {
        'custom-70': '4.375rem'
      },
      gap: {
        'custom-2': '0.125rem'
      }
    },
  },
  plugins: [],
};
export default config;
