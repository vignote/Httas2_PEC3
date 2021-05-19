const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transform: ["hover"],
      letterSpacing: ["hover", "focus"],
      fontSize: ["hover", "focus"],
      fontFamily: {
        heading: [
          "Lobster",
          "Lobster",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
        sans: ["Oswald", "Georgia", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      yellow: "#e3b119",
      lightYellow: "#dfd97b",
      darkYellow: "#c49c24;",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
