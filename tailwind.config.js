/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: '#d70567',
        secondaryWhite: '#ffffff',
        tertiaryBlack: ' #0e1207',
        quaternaryGrey: '#cfd7d7',
      },
      screens: {
        sm: '0px',
        md: '600px',
        lg: '1100px',
      },
    },
  },
  plugins: [],
}
