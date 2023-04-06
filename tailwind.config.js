const { transparent } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors,
        hatsa: "#0A344F",
      },
      animation: {
        blingking: "blink-caret .65s step-end infinite;",
      },
      keyframes: {
        "blink-caret": {
          "0%, 100%": { "border-color": transparent },
          "50%": { "border-color": colors.black },
        },
      },
    },
  },
  plugins: [],
};
