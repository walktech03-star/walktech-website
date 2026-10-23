/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appRouter: true,
  },
  images: {
    domains: ['localhost', '127.0.0.1'],
  },
}

module.exports = nextConfig