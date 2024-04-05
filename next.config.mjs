/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOST,
      },
      {
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

export default nextConfig;
