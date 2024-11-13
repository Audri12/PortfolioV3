/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'scale-up': 'scale-up 0.3s ease-out forwards',
        'slide-up': 'slide-up 0.4s ease-out forwards',
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

