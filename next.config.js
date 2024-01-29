/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
