/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    unoptimized: true,
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
