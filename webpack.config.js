var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

var config = {
	// context: __dirname, // 工作路径, default: process.cwd()
	entry: {
		app: "./src/index",
		// app2: ["./src/a.js", "./src/b.js"]
	},
	output: {
		publicPath: "/assets/",
		path: __dirname + "/dist",
		filename: "[name].js"
	},
	module: {
		loaders: [{
			test: /.js$/,
			loader: "babel",
			exclude: /node_modules/
		}, {
			test: /.css$/,
			exclude: /css/,
			// loader: "style!css",
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /.css$/,
			include: /css/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}]
	},
	plugins: [
		new ExtractTextPlugin("styles.css")
	]
}

module.exports = config;