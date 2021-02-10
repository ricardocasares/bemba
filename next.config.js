const preact = require('next-plugin-preact');

module.exports = preact({
  i18n: {
    locales: ["en", "es", "pl", "fr", "ru"],
    defaultLocale: "en",
  },
  env: {
    NEXT_PUBLIC_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  },
  experimental: {
    plugins: true,
    webpack5: true
  },
  reactStrictMode: true
});
