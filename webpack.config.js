const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = env => {
	return {
		mode: env.mode || 'development',
		entry: path.resolve(__dirname, 'src', 'app.js'),
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[name].[contenthash].bundle.js',
			clean: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'),
				filename: 'index.html',
			}),
			new Dotenv(),
		],
	}
}
