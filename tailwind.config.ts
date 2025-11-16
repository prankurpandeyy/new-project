import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        dark: '#1A1A1A',
        light: '#F7F7F7',
        border: '#000000',
        success: '#95E1D3',
        warning: '#F38181',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        'brutal': '4px',
      },
      boxShadow: {
        'brutal': '8px 8px 0px #000000',
        'brutal-sm': '4px 4px 0px #000000',
        'brutal-md': '6px 6px 0px #000000',
      },
    },
  },
  plugins: [],
};

export default config;