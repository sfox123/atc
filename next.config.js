/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Produce static output in the "out" folder
  output: 'export',

  // Use a relative prefix (important for opening files locally or hosting in subfolders)
  assetPrefix: './',

  // Disable strict mode if you prefer
  reactStrictMode: false,

  // Ensures directories (like /about/) have trailing slashes in exported HTML
  trailingSlash: true,

  // Disable build activity indicator for a cleaner console
  devIndicators: {
    buildActivity: false,
  },

  // Configure SASS to look for files in "css/" directory
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },

  // Adjust ESLint settings
  eslint: {
    // If you want production builds to fail on ESLint errors, set this to 'false'
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
