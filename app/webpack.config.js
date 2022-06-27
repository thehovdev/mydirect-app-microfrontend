const HtmlWebPackPlugin = require('html-webpack-plugin') 								/* eslint-disable-line */
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')  /* eslint-disable-line */
const deps = require('./package.json').dependencies 									/* eslint-disable-line */

module.exports = {
	output: {
		publicPath: 'http://localhost:8080/',
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
	},

	devServer: {
		port: 8080,
		historyApiFallback: true,
	},

	module: {
		rules: [
			{
				test: /\.m?js/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	plugins: [
		new ModuleFederationPlugin({
			name: 'app',
			filename: 'remoteEntry.js',
			remotes: {
				navbar: 'navbar@http://localhost:3000/remoteEntry.js',
				login: 'login@http://localhost:3001/remoteEntry.js'
			},
			exposes: {},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				'react-dom': {
					singleton: true,
					requiredVersion: deps['react-dom'],
				},
			},
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
	],
}
