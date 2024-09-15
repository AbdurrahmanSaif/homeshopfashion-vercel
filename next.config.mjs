/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['homeshopfashion.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
