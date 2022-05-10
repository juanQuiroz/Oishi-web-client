module.exports = {
  env: {
    v1: "https://api-oishi.weboishibackend.com/api/v1",
    v2: "https://api-oishi.weboishibackend.com/api/v2",
    // vtest: "https://develop.api-oishi.weboishibackend.com",
    vtest: "https://production.api-oishi.weboishibackend.com",
  },

  webpack5: true,

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
