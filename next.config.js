/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["images.pexels.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
