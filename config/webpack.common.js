var path = require('path');
var webpack = require('webpack');
var html = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfill: 'babel-polyfill',
        ui: ['react', 'react-dom', 'redux', 'redux-thunk', 'react-redux']
    },

    output: {
        path: path.join(__dirname, "../dist/defymedia"),
        filename: 'defymedia-[name]-[hash].js',
        publicPath: '/defymedia/'
    },
    plugins: [
        new html({
        template: path.join(__dirname, `../app/tpls/index.html`),
        filename: 'index.html',
        inject: 'body',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(
                // dev test online
                process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'
            )
        },
    })
    ],

    module: {
        loaders: [
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)\??/,
            loader: 'file?name=static/[name].[hash].[ext]'

        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        }
        ]
    }
};
