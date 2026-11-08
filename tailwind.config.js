/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chillax: ["Chillax", "sans-serif"],
        rockybilly: ["Rockybilly", "cursive"],
        anta: ['"Anta"', "sans-serif"],
        vietnam: ['"Be Vietnam Pro"', 'sans-serif'],

      }
    }
  },
  plugins: []
};
