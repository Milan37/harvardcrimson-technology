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
        {
          protocol: "https",
          hostname: "s3.amazonaws.com",
        },
        {
          protocol: "https",
          hostname: "pbs.twimg.com",
        }
      ],
    },
  };
  
  export default nextConfig;