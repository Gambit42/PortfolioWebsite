module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla"],
        rubik: ["Rubik"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
