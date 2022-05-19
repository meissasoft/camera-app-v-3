/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/**
 * @type {import('next').NextConfig}
 */
 const path = require('path');
const nextConfig = {
  env: {
    // env for client side
    ROLLBAR_ID: process.env.ROLLBAR_ID,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de']
  },
  ns: 'common',
  localePath: path.resolve('.public/locales'),
  trailingSlash: true,
};

module.exports = nextConfig;
