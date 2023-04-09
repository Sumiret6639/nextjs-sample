/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // reactStrictMode: true,
  // 以下為跨域代理的部分
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*", //[後端提供的子路徑名稱]/api/:path*
  //       destination: "/api/:path*", // 要代理到的完整網域名稱、包含子路徑名稱
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
