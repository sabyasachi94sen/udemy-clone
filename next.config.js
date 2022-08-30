// ref: https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1230325393
const plugins = [];

if (process.env.ANALYZE === "true") {
  // only load dependency if env `ANALYZE` was set
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });

  plugins.push(withBundleAnalyzer);
}

/** @type {import('next').NextConfig} */
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

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig);
