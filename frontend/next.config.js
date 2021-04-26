module.exports = {
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
  experimental: {
    plugins: true,
  },
  env: {
    NEXT_PUBLIC_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    NEXT_PUBLIC_SENTRY_DSN: process.env.SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_RELEASE: process.env.VERCEL_GIT_COMMIT_SHA,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    NEXT_PUBLIC_COOKIE_CSRF: process.env.NEXT_PUBLIC_COOKIE_CSRF,
    NEXT_PUBLIC_COOKIE_TOKEN: process.env.NEXT_PUBLIC_COOKIE_TOKEN,
    NEXT_PUBLIC_COOKIE_CALLBACK: process.env.NEXT_PUBLIC_COOKIE_CALLBACK,
  },
  async rewrites() {
    return [
      { source: "/stream", destination: process.env.STREAM_PROXY },
      { source: "/api/graphql", destination: process.env.GRAPHQL_ENDPOINT }
    ];
  }
};
