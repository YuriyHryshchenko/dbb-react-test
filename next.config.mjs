/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        REFRESH_TOKEN: process.env.REFRESH_TOKEN,
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
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
