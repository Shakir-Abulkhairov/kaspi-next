/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['default','ru', 'en'],
    defaultLocale: 'default',
    localeDetection: true,
  },
  trailingSlash: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['kaspi.kz'],
  },
}

module.exports = nextConfig
