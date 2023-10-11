/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    /**remotePatterns:[
      {
        protocol: 'https',
        hostname: 'console.cloudinary.com',
        port: '',
        pathname: '/console/**'
      }
    ] **/
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
