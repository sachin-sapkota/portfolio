/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],

        headline: ['walshiem'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
