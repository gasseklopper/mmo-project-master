// Makes Sass faster!
const Fiber = require('fibers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	// Our "entry" point
	entry: './src/assets/js/index.js',
	output: {
		// The global variable name any `exports` from `index.js` will be available at
		library: 'SITE',
		// Where webpack will compile the assets
		path: path.resolve(__dirname, 'src/assets/compiled-assets'),
	},
	module: {
		rules: [
			{
				// Setting up compiling our Sass
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							sassOptions: {
								fiber: Fiber,
								outputStyle: 'expanded',
							},
						},
					},
				],
			},
		],
	},
	// Any `import`s from `node_modules` will compiled in to a `vendor.js` file.
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
		minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
};