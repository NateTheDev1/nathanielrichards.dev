/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#fbab53",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
