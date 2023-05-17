/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "links.papareact.com",
      "brandlogovector.com",
      "brandlogovector.com/wp-content",
      "static.cdnlogo.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
