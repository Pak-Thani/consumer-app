module.exports = {
  images: {
    domains: ['sgp1.digitaloceanspaces.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
