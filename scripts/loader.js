const eslint = {
	enforce: "pre",
	test: [
		/\.js$/,
		/\.jsx$/,
		/\.ts$/,
		/\.spec.ts$/,
		/\.tsx$/,
		/\.spec.tsx$/,
		/\.graphql$/
	],
	exclude: [
		/node_modules/,
		/lib/,
		/vcap.local.js/,
		/source\/js\/bootstrap/
	],
	loader: "eslint-loader",
	options: {
		"print-config": true
	}
};

const typescript = {
	test: [
		/\.js$/,
		/\.jsx$/,
		/\.ts$/,
		/\.tsx$/,
		/\.graphql$/
	],
	exclude: [
		/node_modules/,
		/lib/,
		/vcap.local.js/
	],
	use: [
		{
			loader: 'babel-loader'
		},
		{
			loader: 'ts-loader',
			options: {
				transpileOnly: false
			}
		}
	]
};

const fileLoader = {
	test: /\.svg$/,
	loader: 'file-loader'
};

const sassGlobal = {
	test: [/\.scss$/],
	exclude: [/\.module.scss$/],
	use: [
		{
			loader: "style-loader"
		},
		{
			loader: "css-loader",
			options: {
				sourceMap: false
			}
		},
		{
			loader: "sass-loader"
		}
	]
};

const sassModules = {
	test: [/\.module.scss$/],
	exclude: [/^(?!(.*)module.scss$).*\.scss$/],
	use: [
		{
			loader: "style-loader"
		},
		{
			loader: "css-loader",
			options: {
				modules: {
					localIdentName: '[name]__[local]__[hash:base64:5]',
					exportLocalsConvention: 'camelCaseOnly'
				},
				sourceMap: true
			}
		},
		{
			loader: "sass-loader"
		}
	]
};

module.exports = {
	eslint,
	typescript,
	fileLoader,
	sassGlobal,
	sassModules
};
