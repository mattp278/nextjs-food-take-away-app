/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#b4260b',
        secondaryOrange: '#de8c21',
        tertiaryGold: '#c9b064',
        quaternaryBrown: '#c79467',
        whiteFloral: '#f9f6ee',
      },
    },
  },
  plugins: [],
}
