const withOffline = require('next-offline');

const sitemap = require('nextjs-sitemap-generator');

sitemap({
    baseUrl: 'http://localhost:3000',
    pagesDirectory: __dirname + "/pages",
    targetDirectory: 'static/'
});

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
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
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