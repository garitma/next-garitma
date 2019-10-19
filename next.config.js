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
                handler: 'NetworkFirst',
            },
            {
                urlPattern: /^https?:\/\/images.prismic.io\/garitma\/.*/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'Imagx',
                    expiration: {
                        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
                    },
                },
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