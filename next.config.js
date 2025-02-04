/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/nixxholas.github.io' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 