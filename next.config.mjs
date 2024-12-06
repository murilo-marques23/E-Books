/** @type {import('next').NextConfig} */
const nextConfig = {rewrites: async () => {
    return[
        {
            source: '/api/:path*',
            destination: 'http://localhost:8080/:path*'
        }
    ]
}};

export default nextConfig;
