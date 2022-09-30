/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Inknut Antiqua'],
      heading: ['Source Code Pro'],
      body: ['Anaheim'],
    },
    extend: {
      height: {
        header: '10%',
        main: '90%',
      },
    },
  },
  plugins: [],
};
