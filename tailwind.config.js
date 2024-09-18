/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('./assets/example-face.jpg')",
      },
      fontFamily: {
        'poppins': ['poppins'],
      },
    },
  },
  plugins: [],
}

