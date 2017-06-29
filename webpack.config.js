var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var common = require('./config/webpack.common.js');

module.exports = merge(common, {
    devtool: "inline-source-map",

    entry: {
        home: ["webpack-hot-middleware/client?reload=true", `./app/main.js`],
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js']
        }),

        new ExtractTextPlugin("[name].css"),
    ],

    resolve: {
        alias: {}
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: [ __dirname ],
                query: {
                    // es6 support
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-decorators-legacy', ['import', {
                        libraryName: 'antd',
                        style: 'css'
                    }]],
                },
                loader: 'babel-loader',
            }
        ]
    }
});
