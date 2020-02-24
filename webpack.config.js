var path = require("path");
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,

    entry: './cride/frontend/src/index',

    output: {
        path: path.resolve('./cride/frontend/static/bundles/'),
        // filename: "[name]-[hash].js",
        filename: "[name].js",
    },

    plugins: [
        new BundleTracker({ filename: './cride/webpack-stats.json' }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }

};