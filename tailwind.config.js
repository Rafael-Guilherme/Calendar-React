/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'shadow-calendar': '0px 5px 10px 0px rgba(0,255,255,0.7)',
        'shadow-calendar-days-hover': '0px 10px 20px 2px rgba(0,255,255,0.7)',
      }
    },
  },
  plugins: [],
}