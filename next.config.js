const withGraphQL = require('next-plugin-graphql');

module.exports = withGraphQL({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  publicRuntimeConfig: {
    sentry: {
      environment: process.env.VERCEL_ENV,
    },
  },
  i18n: {
    locales: ["en", "es", "pl", "fr", "ru"],
    defaultLocale: "en",
  },
  future: {
    webpack5: false
  },
  experimental: {
    plugins: true,
  },
  env: {
    NEXT_PUBLIC_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    NEXT_PUBLIC_SENTRY_DSN: process.env.SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_RELEASE: process.env.VERCEL_GIT_COMMIT_SHA,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  },
  async rewrites() {
    return [{
      source: "/stream",
      destination: process.env.STREAM_PROXY
    }];
  }
});
