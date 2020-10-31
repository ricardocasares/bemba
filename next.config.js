module.exports = {
  i18n: {
    locales: ["en", "es", "pl", "fr", "ru"],
    defaultLocale: "en",
  },
  env: {
    NEXT_PUBLIC_SHA: process.env.VERCEL_GITHUB_COMMIT_SHA,
  },
};
