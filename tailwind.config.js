/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#fafafa',
        'custom-gray': '#1c1d26',
        'custom-dark-gray': '#353944',
      },
    },
  },
  plugins: [],
}