var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');
config.entry.home.unshift('webpack-dev-server/client?http://localhost:3000/');

var port = process.env.PORT ? process.env.PORT : 3000;

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {});

server.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        timings: true,
    }
}));

server.use(webpackHotMiddleware(compiler));

server.listen(port);

