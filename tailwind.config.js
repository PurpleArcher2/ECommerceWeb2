/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bgimage: "url('./imgs/background.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
