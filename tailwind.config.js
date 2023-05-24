/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      robotoCondensed: 'Roboto Condensed',
      comfortaa: 'Comfortaa'
    },
    extend: {
      colors: {
        primary: '#2B8AC6',
        primaryLight: '#A5D8FF',
        primaryDark: '#024c73',
        secondary: '#1EAE1E',
        secondaryLight: '#C4FFC4',
        secondaryDark: '#0d6e0d',
        tertiary: '#4F4F4F',
        tertiaryLight: '#EDEDED',
        tertiaryDark: '#2B2B2B',
      },
    },
  },
  plugins: [],
}
