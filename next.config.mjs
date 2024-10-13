/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [{ hostname: 'picsum.photos' }]
  }
};

export default nextConfig;
