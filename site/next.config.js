/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Luxe Softwares',
    description: 'Luxe Softwares',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/lvluanvinicius/kasm-vscode-register',
    contactUrl: 'https://github.com/lvluanvinicius/kasm-vscode-register/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
