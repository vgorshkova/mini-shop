'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		path.join(__dirname, 'src/app.jsx')
	],
	resolve: {
		root: [
			path.resolve(__dirname, "src"),
		],
		extensions: ['', '.js', '.jsx', '.css', '.less']
	},
	output: {
		path: path.join(__dirname, '/public/'),
		filename: '[name].js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new ExtractTextPlugin('[name].[hash].css'),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({ warnings: false, mangle: false, sourcemap: false }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel'
		}, {
			test: /\.css$/,
			loader: 'style!css'
		},{
			test: /\.less$/,
			loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]!less',
			include: [
				path.join(__dirname, "src"),
			],
		}
		]
	}
};