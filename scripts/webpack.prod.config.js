const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
	eslint,
	typescript,
	fileLoader,
	sassGlobal,
	sassModules
} = require("./loader");

const pluginConfigs = {
	CopyWebpackPlugin: new CopyWebpackPlugin({
		patterns: [
			{ from: 'src/index.html', to: 'index.html' },
			// { from: 'src/ok.html', to: 'ok.html' },
			// { from: "src/assets", to: "assets" }
			// { from: "server/certs", to: "certs" },
			// { from: "src/fonts", to: "fonts" },
			// { from: 'src/images', to: 'images' }
			{ from: 'node_modules/carbon-components/css/carbon-components.css', to: 'css/carbon-components.css' }
			// { from: 'server/schemas/*.graphql', to: 'schemas/[name].graphql', toType: 'template' },
			// { from: 'node_modules/semantic-ui-css/themes', to: 'themes' },
			// { from: 'configuration.json', to: 'configuration.json' },
			// { from: "src/assets", to: "assets" },
			// { from: "server/driver", to: "driver" },
			// { from: 'node_modules/semantic-ui-css/semantic.css', to: 'semantic.css' }
		]
	}),
	EnvironmentPlugin: new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
	})
};

const baseConfig = {
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '../dist')
	},
	stats: "errors-only",
	mode: 'production',
	// node: {
	// 	path: true,
	// 	__dirname: true,
	// 	fs: "empty",
	// 	net: "empty"
	// },
	module: {
		rules: [
			eslint,
			typescript,
			fileLoader,
			sassModules,
			sassGlobal
		]
	}
};

const clientConfig = Object.assign({}, baseConfig, {
	entry: {
		bundle: path.join(__dirname, '../src/app.tsx')
	},
	target: 'web',
	resolve: {
		extensions: [
			".jsx",
			".js",
			".tsx",
			".ts"
		],
		mainFields: ['browser', 'main', 'module'],
		alias: {
		// 	common: path.resolve(__dirname, "src/common/"),
		// 	modules: path.resolve(__dirname, "src/modules/"),
			assets: path.resolve(__dirname, "src/assets/")
		// 	root: path.resolve(__dirname, "src/")
		}
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({ options: {} }),
		pluginConfigs.CopyWebpackPlugin,
		pluginConfigs.EnvironmentPlugin
	]
});

const serverConfig = Object.assign({}, baseConfig, {
	entry: {
		server: path.join(__dirname, '../server/index.ts')
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	target: 'node',
	externals: {
		saslprep: "require('saslprep')"
	},
	plugins: []
});

module.exports = [
	clientConfig, serverConfig
];

module.exports.pluginConfigs = pluginConfigs;
