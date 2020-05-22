const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  en: "en",
  zh: "zh",
};

module.exports = {
  publicRuntimeConfig: {
    localeSubpaths,
  },
  experimental: {
    async rewrites() {
      return [...nextI18NextRewrites(localeSubpaths)];
    },
  },
  target: "serverless",
};
