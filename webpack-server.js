var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var path = require('path');
var config = require('./webpack.config');

var express = require('express');

var app = express();
var port = process.env.PORT ? process.env.PORT : 3000;

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        timings: true,
    }
}));

app.use(webpackHotMiddleware(compiler));

app.get("/", function (req, res, next) {
    var viewpath = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(viewpath, (err, result) => {
        if (err) {
            return next(err);
        }
        res.set("content-type", "text/html");
        res.send(result);
        res.end();
    });
});

app.get("/favicon.ico", function (req, res) {
    return res.end();
});

app.get("/:view", function (req, res, next) {

    var view = req.params.view
    ? req.params.view
    : "index.html";

    var viewpath = path.join(compiler.outputPath, view);

    compiler.outputFileSystem.readFile(viewpath, (err, result) => {
        if (err) {
            return next(err);
        }
        res.set("content-type", "text/html");
        res.send(result);
        res.end();
    });

});

app.use("/images", express.static(path.join(__dirname, "./images")));

app.listen(port, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.info("======== > server listen on: %s < ========", port);
    }
});
