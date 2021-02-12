const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        config.plugins.push(new ExtraWatchWebpackPlugin({
            dirs: ['amp-demos'],
        }));
        config.module.rules.push({
            test: /amp-demos\/index.js$/,
            use: [
                {
                    loader: `val-loader`,
                },
            ],
        });
        // Important: return the modified config
        return config;
    },
};