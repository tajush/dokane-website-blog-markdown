/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Adds a trailing slash to all routes
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;
