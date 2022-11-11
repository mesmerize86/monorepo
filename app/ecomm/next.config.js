/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['pages'], // Only run ESLint on the 'pages' during production builds (next build)
  },
}

module.exports = nextConfig
