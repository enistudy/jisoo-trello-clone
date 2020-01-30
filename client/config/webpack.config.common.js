const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const DotenvPlugin = require("dotenv-webpack");

module.exports = {
	context: path.resolve(__dirname, "..", "src"),
	entry: { app: ["@babel/polyfill", "./index.tsx"] },
	output: {
		path: path.resolve(__dirname, "..", "build"),
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: [
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
							experimentalWatchApi: true
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader",
				options: {
					publicPath: "/",
					name: "[name].[ext]?[hash]"
				}
			},
			{
				test: /\.(png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: {
					loader: "url-loader",
					options: {
						name: "[name].[ext]?[hash]",
						limit: 8192
					}
				}
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "..", "public/index.html"),
			filename: path.join(__dirname, "..", "build/index.html"),
			favicon: path.join(__dirname, "..", "public/favicon.ico"),
			inject: true
		}),
		new DotenvPlugin(),
		new ForkTsCheckerPlugin({
			tsconfig: path.join(__dirname, "..", "tsconfig.json")
		}),
		new MiniCssExtractPlugin()
	],
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
		modules: [path.join(__dirname, "..", "src"), "node_modules"]
	}
};
