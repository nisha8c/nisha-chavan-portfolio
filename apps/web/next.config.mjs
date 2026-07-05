/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/images/**',
            },
        ],
    },
    experimental: {
        inlineCss: true,
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },
}

export default nextConfig
