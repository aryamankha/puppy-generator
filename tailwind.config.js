/** @type {import('tailwindcss').Config} */
module.exports = {
  // Control dark pseudo-selector by ancestor's "dark" class
  darkMode: "class",
  // Scan these files for Tailwind classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./svg/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir Next", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
