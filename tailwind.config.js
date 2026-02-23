/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // 'geist' is the class name you'll use (e.g., font-geist)
        // 'Geist' is the name from the Google Font link
        geist: ['Geist', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}