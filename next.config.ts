import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "boonkrua.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/mourning/อู๊ด",
        destination: "/mourning/ood",
        permanent: true,
      },
      {
        source: "/activities/chess",
        destination: "/chess",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
