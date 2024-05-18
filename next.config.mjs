/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd1hueca0818e4l.cloudfront.net',
                port: '',
                pathname: '/artwork/**',
            },
        ],
    },
};

export default nextConfig;
