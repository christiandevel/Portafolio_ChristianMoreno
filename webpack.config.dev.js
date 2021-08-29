const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('webpack').Configuration} */

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@styles": path.resolve(__dirname, "src/styles/"),
			"@images": path.resolve(__dirname, 'src/assets/images/')
    },
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: false,
    port: 3006,
    open: true,
  },
  mode: "development",
	devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_module/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("src", "index.pug"),
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/particles.json"),
          to: "assets/",
        },
				{
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images",
        },
				{
          from: path.resolve(__dirname, "src", "assets/docs"),
          to: "assets/docs",
        },
      ],
    }),
  ],
};
