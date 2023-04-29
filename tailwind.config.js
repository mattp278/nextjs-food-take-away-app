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
        primaryPink: '#d70567',
        secondaryYellow: '#FFFCC8',
        tertiaryGold: '#ffffff',
        quaternaryBrown: '#c79467',
        quinaryOrange: '#222222',
        secondaryWhite: '#f9f6ee',
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
