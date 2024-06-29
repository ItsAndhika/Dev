/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },
      fontFamily: {
        inter: ["Inter"],
        viraCode: ["Vira Code"],
        Hack: ["Hack"]
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
