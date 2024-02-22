/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: '"Poppins, sans-serif"',
    },
    extend: {
      backgroundImage: {
        bgimage: "url('/imgs/background.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};