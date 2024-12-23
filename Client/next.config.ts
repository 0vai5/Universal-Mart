import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.apple.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.procart.pk",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
