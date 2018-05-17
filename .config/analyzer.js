let { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

let { BUNDLE_ANALYZE } = process.env;
let MODE = "static";
let SERVER = ["server", "both"];
let BROWSER = ["browser", "both"];

module.exports = {
  analyzeServer: SERVER.includes(BUNDLE_ANALYZE),
  analyzeBrowser: BROWSER.includes(BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: MODE,
      reportFilename: "../../.bundles/server.html"
    },
    browser: {
      analyzerMode: MODE,
      reportFilename: "../.bundles/client.html"
    }
  }
};
