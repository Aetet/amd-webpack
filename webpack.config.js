var webpack = require('webpack');
var config = {
	entry: '',
	path: '',
	publicPath: '',
	name: ''
};

module.exports = function (config) {
	var release = config.release;

	return {
		entry: config.entry,
		output: {
			filename: '[name].js',
			path: config.path,
			publicPath: config.publicPath,
			library: config.name || "isomorphic"
		},
		cache: !release,
		watch: true,
		debug: !release,
		devtool: false,
		stats: {
			colors: true,
			reasons: !release
		},
		plugins: release ? [
			new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.AggressiveMergingPlugin()
		] : [],
		resolve: {
			extensions: ['', '.js', '.jsx'],
			modulesDirectories: ['node_modules', 'bower_components'],
			alias: {
				app: config.app
			}
		},
		module: {
			loaders: [
				// { test: /\.hbs$/, loader: "handlebars" }
			]
		},
		resolveLoader: {
			alias: {
				hbs: 'handlebars'
			}
		}
	}
};
