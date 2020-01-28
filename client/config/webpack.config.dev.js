const PORT = 3000;

const path = require("path");

const { HotModuleReplacementPlugin } = require("webpack");
const merge = require("webpack-merge");

const webpackConfigCommon = require("./webpack.config.common");

const webpackConfigDev = {
	mode: "development",
	output: {
		pathinfo: false,
		filename: "[name].bundle.js"
	},
	devtool: "inline-source-map",
	plugins: [new HotModuleReplacementPlugin()],
	devServer: {
		host: "localhost",
		contentBase: path.join(__dirname, "..", "build/"),
		port: PORT,
		open: true,
		hot: true,
		historyApiFallback: true,
		stats: "minimal",
		overlay: {
			warnings: true,
			errors: true
		}
	},
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false
	}
};

module.exports = merge(webpackConfigCommon, webpackConfigDev);
