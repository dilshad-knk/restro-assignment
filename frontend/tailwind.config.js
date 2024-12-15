/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        brand : "#0796EF",
        secondary : "#121618",
        tertiary : "#857878"
      }
    },
  },
  plugins: [],
}