/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide': 'fade-slide 0.6s ease-out forwards',
      },
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

