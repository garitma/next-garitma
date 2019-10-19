const withOffline = require('next-offline');

const nextConfig = {
    target: 'serverless',
    transformManifest: manifest => ['/'].concat(manifest),
    generateInDevMode: false,
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /^https?:\/\/garitma.cdn.prismic.io\/api\/.*/,
                handler: 'StaleWhileRevalidate',
            },
            {
                urlPattern: /^https?:\/\/images.prismic.io\/garitma\/.*/,
                handler: 'CacheFirst',
            },
            {
                urlPattern: /^https:\/\/use.typekit.net\/(.*)/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'TypekitFont',
                    expiration: {
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                    },
                },
            },
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
            },
        ],
    },
};

module.exports = withOffline(nextConfig);