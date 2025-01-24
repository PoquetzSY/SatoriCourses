/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-satori': '#3EC5EF',
      'yellow-satori': '#DCD64E',
      'blue-variant': '#1F9EC2',
      'yellow-variant': '#ECE750',
      'gray': '#7C7D7D',
      'black': '#1D1B20',
      'divider-color': '#D9D9D9',
      'white': '#ffffff',
      'gray-secondary': '#757575',
    },
    fontFamily: {
      roboto: ['Roboto', 'serif'],
      nunito: ['Nunito', 'serif'],
    },
  },
  plugins: [],
}