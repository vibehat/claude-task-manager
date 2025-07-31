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

      // Mark native modules as external to prevent bundling issues
      if (isServer) {
         config.externals = config.externals || [];
         config.externals.push('node-pty');
      }

      // Handle font files for Milkdown Crepe
      config.module.rules.push({
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
      });

      return config;
   },
};

export default nextConfig;
