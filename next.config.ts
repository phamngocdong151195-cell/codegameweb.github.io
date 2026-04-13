import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Game",
  assetPrefix: "/Game/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
