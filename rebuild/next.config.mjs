import path from 'path'
import { fileURLToPath } from 'url'

const __filename = import.meta.url
const __dirname = path.dirname(fileURLToPath(__filename))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/src': path.join(__dirname, 'src'),
      '@/app': path.join(__dirname, 'app'),
    }
    return config
  },
  webpack(config, { webpack }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/src': path.join(__dirname, 'src'),
      '@/app': path.join(__dirname, 'app'),
    }
    return config
  },
  images: {
    domains: ['localhost', '127.0.0.1'],
  },
}

export default nextConfig