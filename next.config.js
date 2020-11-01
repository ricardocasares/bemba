const withPWA = require("next-pwa");
const [first, ...rules] = require("next-pwa/cache");

rules.pop();

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching: [
      {
        ...first,
        handler: "StaleWhileRevalidate",
      },
      ...rules,
    ],
  },
  i18n: {
    locales: ["en", "es", "pl", "fr", "ru"],
    defaultLocale: "en",
  },
  env: {
    NEXT_PUBLIC_SHA: process.env.VERCEL_GITHUB_COMMIT_SHA,
  },
});
