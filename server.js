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
var _ = require("lodash");
// var Loader = require("Loader");
var path = require("path");

var app = new express();
var webpackConfig = require('./webpack.config.js');
var config = require("./config");
var client = redis.createClient();

var router = require("./routes");

// 静态文件路径
app.use("/static", express.static("public"));

// 模板引擎
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine("html", require("ejs-mate"));
app.locals._layoutFile = "layout.html";
_.extend(app.locals, {
	config: config,
	// Loader: Loader
})

// 
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(session({
	store: new redisStore(Object.assign({}, config.redis, {client: client})),
	secret: config.session.secret
}));

// 日志设置
// app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// 路由设置
app.use("/", router);

app.listen(config.port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", config.port, config.port);
  }
})