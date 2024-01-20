/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/products',
      },
    ];
  },
};

export default nextConfig;
