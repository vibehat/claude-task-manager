import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   devIndicators: false,
   webpack: (config, { isServer }) => {
      // Don't bundle Node.js modules on client side
      if (!isServer) {
         config.resolve.fallback = {
            ...config.resolve.fallback,
            child_process: false,
            fs: false,
            events: false,
            path: false,
            os: false,
         };
      }
      return config;
   },
};

export default nextConfig;
