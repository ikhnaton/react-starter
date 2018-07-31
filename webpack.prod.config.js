const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const pluginConfigs = {
	MiniCssExtractPlugin: new MiniCssExtractPlugin({
		filename: "main.css"
	}),
	CopyWebpackPlugin: new CopyWebpackPlugin([
			{ from: 'src/index.html', to: 'index.html' },
			// { from: 'src/images', to: 'images' },
			// { from: 'node_modules/semantic-ui-css/themes', to: 'themes' },
			// { from: 'node_modules/semantic-ui-css/semantic.css', to: '.' }
		], {}),
	UglifyJsPlugin:	new UglifyJsPlugin(),
	EnvironmentPlugin: new webpack.DefinePlugin({
    		'process.env': {
    			'NODE_ENV': JSON.stringify('production')
    		}
		})
};

let ninjaConfigPath = path.resolve(__dirname, 'empty.js');

if (require('fs').existsSync(path.resolve(__dirname, 'vcap.local.js')))
{
	ninjaConfigPath = path.resolve(__dirname, 'vcap.local.js');
}

const baseConfig = {
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/dist')
	},
	stats: "errors-only",
	mode: 'production',
	module: {
		rules: [
			{
				enforce: "pre",
				test: [/\.js$/, /\.jsx$/],
				exclude: [/node_modules/,/lib/,/vcap.local.js/],
				loader: "eslint-loader",
				options: {
				}
			},
			{
				test: [/\.js$/, /\.jsx$/],
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: [/\.css$/,/\.less$/],
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					"css-loader",
					"less-loader"
				]
			}
		]
	}
};

const clientConfig = Object.assign({}, baseConfig, {
	entry: {
		bundle: path.join(__dirname, '/src/app.jsx')
	},
	target: 'web',
	plugins: [
		pluginConfigs.MiniCssExtractPlugin,
		pluginConfigs.CopyWebpackPlugin,
		// pluginConfigs.UglifyJsPlugin,
		pluginConfigs.EnvironmentPlugin
	]
})

const serverConfig = Object.assign({}, baseConfig, {
	entry: {
		backend: path.join(__dirname, '/server/server.js')
	},
	target: 'node',
	plugins: [
		pluginConfigs.MiniCssExtractPlugin,
		// pluginConfigs.UglifyJsPlugin
	],
	resolve: {
		alias: {
		  ninjaConfig: ninjaConfigPath
		}
	}
//	externals: ['vcap.local.js']
})

module.exports = [ clientConfig, serverConfig ]
module.exports.pluginConfigs = pluginConfigs;
