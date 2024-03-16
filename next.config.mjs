/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    },
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
