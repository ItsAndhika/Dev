/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily: {
        'inter': 'Inter'
      },
      colors: {
        'primary': '#0ea5e9',
        'secondary': 'rgb(100, 116, 139)',
        'dark': 'rgb(12, 74, 110)'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
