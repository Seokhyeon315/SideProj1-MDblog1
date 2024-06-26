/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      heading: ["Oswald", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
