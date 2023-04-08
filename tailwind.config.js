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
        secondaryYellow: '#FFFCC8',
        tertiaryGold: '#c9b064',
        quaternaryBrown: '#c79467',
        quinaryOrange: '#de8c21',
        whiteFloral: '#f9f6ee',
        bgBlack: '#1F160F',
      },
      screens: {
        sm: '0px',
        md: '600px',
        lg: '1100px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
