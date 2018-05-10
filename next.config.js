const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const { BUNDLE_ANALYZE } = process.env;

const MODE = "static";
const SERVER = ["server", "both"];
const BROWSER = ["browser", "both"];

module.exports = withBundleAnalyzer({
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
});
