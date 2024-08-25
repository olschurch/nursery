/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: undefined,
  async redirects() {
    return [
      {
        source: '/calendar',
        destination: '/calendar/events',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
