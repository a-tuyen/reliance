/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['user-images.githubusercontent.com']
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "user-images.githubusercontent.com",
    //     port: "",
    //     pathname: "/77664153/",
    //   },
    // ],
  },
};
