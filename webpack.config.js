var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: {
		app:['./index.jsx']
	},
	module: {
		loaders: loaders
	},
	output: {
		path: path.resolve(__dirname,"bundle"),
		filename: "bundle.js"
	}
}