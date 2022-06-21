/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['default', 'ru', 'en'],
    defaultLocale: 'default',
    localeDetection: true,
  },
  trailingSlash: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['kaspi.kz', 'fakestoreapi.com', 'www.svgrepo.com', 'cdn.iconscout.com', 'resources.cdn-kaspi.kz'],
  },
  // env: {
  //   CATEGORY_URL: 'http://localhost:3000/api/producrApi/get-top-cat-list',
  //   PRODUCT_URL: 'http://localhost:3000/api/producrApi/productApi'
  // }
}

module.exports = nextConfig
