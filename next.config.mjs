/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.daisyui.com", "uploads-ssl.webflow.com", "img.youtube.com","storage.googleapis.com"],
    unoptimized: true,
  },
};

export default nextConfig;
