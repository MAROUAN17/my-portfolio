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
        "loop-scroll-rev": "loop-scroll-rev 50s linear infinite",
      },
      keyframes: {
        "loop-scroll" : {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-scroll-rev" : {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
      }
    },
  },
  plugins: [],
}

