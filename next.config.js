module.exports = {
  images: {
    domains: [
      "pakthani.s3.amazonaws.com",
      "pakthani.s3.ap-southeast-1.amazonaws.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
