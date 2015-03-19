var gulp = require('gulp');
var webpack = require('webpack');
var buildConfig = require('./webpack.config');
var path = require('path');

gulp.task('default', function () {
	console.log('webpacK', webpackConfig);
	var config = {
		entry: path.join(process.cwd(), 'client', 'index.js'),
		path: path.join(process.cwd(), 'public', 'js'),
		publicPath: '/js',
		name: 'amdweb',
		release: false,
		app: path.join(process.cwd(), 'client', 'app')
	};

	var webpackConfig = buildConfig(config);
	webpack(webpackConfig).watch(200, function (err, stats) {
		if (err) {
			throw new plugs.util.PluginError('webpack', err);
		}
		!config.release && console.log('[webpack]', stats.toString({colors: true}));
	});
});
