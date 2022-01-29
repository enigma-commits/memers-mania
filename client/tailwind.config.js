module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        memer_dark: {
          DEFAULT: "#030303",
          brighter: "#272728",
        },
        memer_border: {
          DEFAULT: "#343536",
        },
      },
    },
  },
  plugins: [],
};
