/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
      remotePatterns: [
        {
          hostname: 'www.iris-salten.no',
        },
        {
          hostname: 'i.imgur.com',
        },
        {
          hostname: 'i.ibb.co',
        },
        {
          hostname: 'images.unsplash.com',
        }
      ],
    },
  }
