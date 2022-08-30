/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // i18n,
  experimental: { esmExternals: true, scrollRestoration: true },
  reactStrictMode: true,
  eslint: {
    // !! WARNING: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARNING:Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  generateBuildId: () => "build",
};

const plugins = [withBundleAnalyzer];

module.exports = withPlugins([...plugins], nextConfig);
