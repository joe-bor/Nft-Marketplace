const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
	return {
		entry: {
			App: './src/index.js',
			main: './src/main.js'
			/* main: *
				but this is where you would put code that you need to be compiled in the browser seperate from the react app, like google analytics, google maps, facebook pixel stuff, adsense scripts etc
				every framework has a mechanism for these things
			*/
		},
		output: {
			path: path.resolve(__dirname, 'public/js/dist'),
			filename: '[name].[contenthash].js', // '[name].[contenthash].js' put this if you want to get hashed files to cache bust
			sourceMapFilename: '[name].[contenthash].js.map',
			publicPath: '/js/dist'
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.m?js$/,
					enforce: 'pre',
					use: ['source-map-loader']
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						},
						'sass-loader',
						'postcss-loader'
					]
				}
			]
		},
		resolve: {
			modules: ['node_modules']
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'style.[contenthash].css' // 'style.[contenthash].css' put this if you want to get hashed files to cache bust
			}),
			new HtmlWebpackPlugin({
				inject: true,
				hash: true,
				template: './src/index.html',
				children: false,
				filename: '../../index.html'
			}),
			new CleanWebpackPlugin(),
			new webpack.ProvidePlugin({
				React: 'react'
			})
		],
		optimization: {
			splitChunks: {
				chunks: 'all',
				minSize: 0
			},
			usedExports: true,
			sideEffects: true
		}
	};
};
