module.exports = {
  i18n: {
    locales: ["en", "es", "pl", "fr", "ru"],
    defaultLocale: "en",
  },
  env: {
    NEXT_PUBLIC_SHA: process.env.VERCEL_GITHUB_COMMIT_SHA,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  },
  experimental: {
    plugins: true
  }
};
