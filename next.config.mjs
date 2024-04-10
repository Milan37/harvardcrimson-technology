/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "media.licdn.com",
        },
        {
          protocol: "https",
          hostname: "cs121.boazbarak.org",
        },
      ],
    },
  };
  
  export default nextConfig;