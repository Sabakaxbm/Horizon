const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const { i18n } = require('./next-i18next.config')


module.exports = withBundleAnalyzer({
    eslint: {
        dirs: ['.'],
    },
    images: {
        // domains: ['135.181.216.90', '135.181.216.90:49213'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    i18n,
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
    pageExtensions: ['page.tsx', 'page.ts', 'page.js', 'page.jsx'],
})
