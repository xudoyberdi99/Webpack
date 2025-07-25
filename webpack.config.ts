import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import webpack, { Configuration } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

interface Env {
	mode?: 'development' | 'production'
}

export default (env: Env) => {
	const devServer: DevServerConfiguration = {
		port: 3000,
		open: true,
		hot: true,
		compress: true,
	}
	const config: Configuration = {
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
		devServer: devServer,
	}
	return config
}
