/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fifa-blue': '#0a4595',
        'fifa-navy': '#1a1a2e',
        'fifa-bright': '#3a39ff',
        'fifa-light': '#f4f4f4',
        'fifa-black': '#0c0c0c',
      },
      fontFamily: {
        'display': ['"Archivo"', 'sans-serif'],
        'body': ['"Archivo"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}