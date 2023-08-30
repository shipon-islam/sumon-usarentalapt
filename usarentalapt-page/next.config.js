/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "localhost", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
