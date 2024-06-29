/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '50px'
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        dark: "#0f172a"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
