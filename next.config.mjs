/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'artofflow.s3.us-west-2.amazonaws.com',
                port: '',
                pathname: '/artwork/**',
            },
        ],
    },
};

export default nextConfig;
