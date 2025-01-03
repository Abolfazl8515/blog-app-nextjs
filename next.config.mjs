/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogapi.karinoproject.ir",
        port: "5004",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
