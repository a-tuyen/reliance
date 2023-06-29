/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        boldHeading: ["Bebas Neue"],
        heading: ["Oswald"],
        banner: ["Kaushan Script"]
      },
      colors: {
        darkMain: '#393b3e',
        main: '#4C4E52',
        lightMain:'#d1d5db',
        // accent: '#004080',
        // accent: '#147197',
        accent: '#039BC3', //waves blue
        // accent: '#5c90d2', //light blue orig
        alum:'#0D47A1',
        alumLight:'#BBDEFB',
        zinc:'#00796B',
        zincLight:'#B2DFDB'

      }

    },
  },
  plugins: [],
};
