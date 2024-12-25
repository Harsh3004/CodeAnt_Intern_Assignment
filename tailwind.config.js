/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#FFFFFF',
        'bgSecondryColor': '#FAFAFA',
        'seprator': '#E6E8F0',
        "title-txt": '#081735',
        "txt-color": "#171717",
        "bg-pieChart": "#9D90FA40",
        "privacy-txt": "#181D27",
        "btn-txt": "#414651",
      }
    },
  },
  plugins: [],
}