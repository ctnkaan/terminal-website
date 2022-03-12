/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'tryhackme-badges.s3.amazonaws.com', 
      'tryhackme.com'
    ]
  }
}

module.exports = nextConfig
