const withPlugins = require("next-compose-plugins");
const withManifest = require("next-manifest");
const withAnalyzer = require("@zeit/next-bundle-analyzer");
const withTypescript = require("@zeit/next-typescript");

module.exports = withPlugins([
  [withTypescript],
  [withManifest, require("./.config/manifest")],
  [withAnalyzer, require("./.config/analyzer")]
]);
