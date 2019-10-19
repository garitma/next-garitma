const withOffline = require('next-offline');

const nextConfig = {
    target: 'serverless',
    transformManifest: manifest => ['/'].concat(manifest),
    generateInDevMode: false,
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'https-calls',
                    networkTimeoutSeconds: 15,
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 1 * 24 * 60 * 60, // 1 days
                    },
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
        ],
    },
};

module.exports = withOffline(nextConfig);