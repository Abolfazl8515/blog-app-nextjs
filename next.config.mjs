/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogapi.karinoproject.ir",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
