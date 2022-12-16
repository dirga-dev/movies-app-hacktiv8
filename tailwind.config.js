/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './src/*.{html,js,jsx}', './public/*.{html,js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      libre: ['Libre Baskerville', ...defaultTheme.fontFamily.sans],
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#fbbf24',
        secblack: '#101116',
        secondary: '#bebebe',
        secoppacity: '#d9d9d9',
      },
    },
  },
  plugins: [],
};
