/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aldrich: ['Aldrich', 'sans-serif'],
    
      },
      borderImage: {
        'gradient-border': 'linear-gradient(to right, #a855f7, #ec4899)',
      },
    },
  },
  plugins: [],
}

