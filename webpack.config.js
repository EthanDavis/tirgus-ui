const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	resolve: {
		extensions: ['.json', '.js', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: './build',
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('./index.html'),
		}),
	],
};
