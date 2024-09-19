/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('./assets/my-face.png')",
      },
      fontFamily: {
        'poppins': ['poppins'],
      },
    },
  },
  plugins: [],
}

