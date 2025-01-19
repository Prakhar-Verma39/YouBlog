/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: '#141E46',
        SecondaryColor: '#ffffff',
        TertiaryColor: '#FFF5E0',
        QuaternaryColor: '#41B06E',
        QuinaryColor: '#8DECB4',
      },
      fontFamily: {
        playfairDisplay: ['Playfair Display', ...fontFamily.sans],
        merriWeather: ['Merriweather', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}