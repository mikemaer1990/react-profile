// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // colors: {
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.gray,
    //   indigo: colors.indigo,
    //   red: colors.rose,
    //   yellow: colors.amber,
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}