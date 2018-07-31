const devConfig = {
	devtool: 'source-map',
	watch: true,
	mode: 'development',
	stats: {
		colors: true
	}
}

const prodConfig = require('./webpack.prod.config');

const clientConfig = Object.assign({}, prodConfig[0], devConfig, {
	plugins: [
		prodConfig.pluginConfigs.MiniCssExtractPlugin,
		prodConfig.pluginConfigs.CopyWebpackPlugin
	]
});
const serverConfig = Object.assign({}, prodConfig[1], devConfig, {
	plugins: [
		prodConfig.pluginConfigs.MiniCssExtractPlugin
	]
});

module.exports = [ clientConfig, serverConfig ]
