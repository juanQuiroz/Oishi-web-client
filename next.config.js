module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  images: {
    domains: [
      "oishirestaurant.herokuapp.com",
      "localhost",
      "res.cloudinary.com",
      "restaurantoishi.s3.sa-east-1.amazonaws.com",
    ],
  },
};
