/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
  // modularizeImports:{
  //   "@heroicons/react/24/outline":{
  //     transform:"@heroicons/react/24/outline/{{member}}"
  //   }
  // }
}

module.exports = nextConfig