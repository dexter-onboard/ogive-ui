import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      domains: ['newsite.ogivetechnology.com', 
        'caltechsites-prod.s3.amazonaws.com',
        'img.freepik.com',
        'cdn-bbaid.nitrocdn.com',
        'via.placeholder.com'
      ],
    },
};

export default nextConfig;
