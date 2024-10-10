const { transform } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('./assets/my-face-2.png')",
      },
      fontFamily: {
        'poppins': ['poppins'],
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "slideIn": "slide-in 180ms linear",
        "slideOut": "slide-out 180ms linear",
      },
      keyframes: {
        "loop-scroll" : {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        "slide-in" : {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0%)" },
        },
        "slide-out" : {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-100%)" },
        }
      }
    },
  },
  plugins: [],
}

