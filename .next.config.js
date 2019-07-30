const path = require("path");

module.exports = {
  target: "serverless",
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  env: {
    INPUT_GA_ID: process.env.INPUT_GA_ID
  }
};
