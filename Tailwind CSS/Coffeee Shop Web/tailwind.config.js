/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        main: "#d3ad7f",
        blck: "#13131a",
        bg: "#010103",
        border: ".1rem solid rgba(255, 255, 255, .3)"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
