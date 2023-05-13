/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js,php}",
    "./pages/**/*.{html,js,php}",
    "./src/**/*.{html,js,php}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ["sf-pro"],
        manrope: ["manrope"],
      },
      fontSize: {
        36: ["36px"],
      },
      colors: {
        iconbg: "rgba(255, 255, 255, 0.06)",
      },
      screens: {
        xs: "376px",
        ms: "576px",
      },
    },
  },
  plugins: [],
};
