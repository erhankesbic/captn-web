import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // Beta-Programm und Cookie-Einstellungen gibt es nicht mehr – alte Links landen sinnvoll
      { source: "/beta", destination: "/", permanent: true },
      { source: "/cookie-einstellungen", destination: "/datenschutz", permanent: true },
    ];
  },
};

export default nextConfig;
