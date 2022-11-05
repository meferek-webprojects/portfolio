/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      blackblue: '#00171F',
      darkblue: '#003459',
      blue: '#007EA7',
      lightblue: '#00A8E8',
      gray: {
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppinsmedium: ["Poppins-Medium", "sans-serif"],
        poppinsbold: ["Poppins-Bold", "sans-serif"],
        poppinsthin: ["Poppins-Thin", "sans-serif"],
      },
      keyframes: {
        moveRight: {
          '0%, 100%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg) scale(1.2)' }
        },
        moveLeft: {
          '0%, 100%': { transform: 'rotate(0deg) translateX(-50px) rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(360deg) translateX(-50px) rotate(-360deg) scale(1.2)' }
        }
      },
      animation: {
        moveRight: 'moveRight 25s linear infinite',
        moveLeft: 'moveLeft 25s linear infinite'
      }
    },
  },
  plugins: [],
}
