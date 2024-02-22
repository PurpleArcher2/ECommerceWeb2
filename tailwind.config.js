/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./index.html"],
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
