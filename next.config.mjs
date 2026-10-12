/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Catalog + machinery photos are served locally from /public.
    // Cloudinary-hosted uploads (quote attachments) are not rendered via next/image.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
