var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var morgan = require("morgan");
var bodyParser = require("body-parser");
var express = require("express");
var stormpath = require("express-stormpath");
var path = require("path");

var config = require('./webpack.config');
var stormOpt = require("./stormpath.config");

var app = new express();
var port = 3000;
var compiler = webpack(config);

app.use(morgan("combined"));
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(stormpath.init(app, stormOpt));

app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "example/index.html"));
})

app.on("stormpath.ready", function() {
	console.log("stormpath ready");

	app.listen(port, function(error) {
	  if (error) {
	    console.error(error);
	  } else {
	    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	  }
	})
})
