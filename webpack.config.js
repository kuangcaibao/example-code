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
			exclude: /node_modules/,
			query: {
				presets: ["es2015"]
			}
		}, {
			test: /.css$/,
			loader: "style!css"
		}]
	}
}

module.exports = config;