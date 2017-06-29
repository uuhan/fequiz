var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var common = require('./config/webpack.common.js');

module.exports = merge(common, {
    entry: {
        home: [`./app/main.js`],
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'common.bundle',
            chunks: ["home", "common", "ui"],
            minChunks: 2
        }),

        new ExtractTextPlugin("[name]-[hash].min.css"),

        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        })
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-decorators-legacy', ['import' , {
                        libraryName: 'antd',
                        style: 'css'
                    }]],
                }
            }
        ]
    }
});
