
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { neo: { red: "#e50914" } },
      boxShadow: { 'soft': '0 10px 30px rgba(0,0,0,0.3)' }
    },
  },
  plugins: [],
};
