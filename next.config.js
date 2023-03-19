const fs = require('fs');

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
});

const locale = JSON.parse(
  fs.readFileSync(`${process.cwd()}/contents/locale.json`, { encoding: 'utf8' }),
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: Object.keys(locale.localeTextMap),
    defaultLocale: locale.defaultLocale,
    localeDetection: false,
  },
};

module.exports = withPWA(nextConfig);
