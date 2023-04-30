/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papereact.com", "static.cdnlogo.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
