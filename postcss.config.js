// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  env: {
    customKey: "https://oishirestaurant.herokuapp.com/api/v1",
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
