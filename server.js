var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require("express");
var session = require("express-session");
var redisStore = require("connect-redis")(session);
var morgan = require("morgan");

var app = new express();
var webpackConfig = require('./webpack.config.js');
var config = require("./config");

var webRouter = require("./routes");

// 
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// 日志设置
app.use(morgan("dev"));
app.use(session({
	store: new redisStore(config.redis),
	secret: config.session.secret
}));

app.use("/", webRouter);

app.listen(config.port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", config.port, config.port);
  }
})