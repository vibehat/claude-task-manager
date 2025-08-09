import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  // Updated for Next.js 15
  serverExternalPackages: ['node-pty'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Since Turbopack doesn't support watchOptions, rely on programmatic sync
  webpack: (config, { isServer, dev }) => {
    // Only apply webpack config in production or when not using Turbopack
    if (!dev) {
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
        config.externals = [...(config.externals || []), 'node-pty'];
      }

      // Handle font files
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      });
    }

    return config;
  },
};

export default nextConfig;
