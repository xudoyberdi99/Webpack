import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import webpack from 'webpack'

module.exports = env => {
	return {
		mode: env.mode || 'development',
		entry: path.resolve(__dirname, 'src', 'app.ts'),
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
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
	}
}
