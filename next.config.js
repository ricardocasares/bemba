let withPlugins = require("next-compose-plugins");
let withManifest = require("next-manifest");
let withAnalyzer = require("@zeit/next-bundle-analyzer");

module.exports = withPlugins([
  [withManifest, require("./.config/manifest")],
  [withAnalyzer, require("./.config/analyzer")]
]);
