const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? '/Frojd-Jewl' : '',
    assetPrefix: isProd ? '/Frojd-Jewl/' : '',
    images: {
        unoptimized: isProd, // Disable optimization only for static Storybook builds
    },
};

export default nextConfig;
