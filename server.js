var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require("express");
var session = require("express-session");
var redisStore = require("connect-redis")(session);
var redis = require("redis");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var midSession = require("./middleware").midSession;

var app = new express();
var webpackConfig = require('./webpack.config.js');
var config = require("./config");
var client = redis.createClient();

var router = require("./routes");

// 
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// app.use("/", express.static("example"));

app.use(session({
	store: new redisStore(Object.assign({}, config.redis, {client: client})),
	secret: config.session.secret
}));

// 日志设置
// app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(midSession);

app.use("/", router);

app.listen(config.port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", config.port, config.port);
  }
})