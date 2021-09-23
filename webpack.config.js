let path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const devServer = require("webpack-dev-server");
const { EnvironmentPlugin } = require("webpack");
const CSSPlugin = require("mini-css-extract-plugin");
require("webpack");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    assetModuleFilename: "imgs/[hash][ext][query]",
    clean: true,
  },
  resolve: {
    extensions: [".js"],
    // alias: {
    //   "@": path.resolve(__dirname, "src"),
    //   "@components": path.resolve(__dirname, "src/components"),
    // },
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    port: 8080,
    open: true,
    hot: true,
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: "/node_modules/",
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [CSSPlugin.loader, "css-loader", "sass-loader"],
        // use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      title: "title",
      template: "./template.html",
      name: "index.html",
    }),
    new CSSPlugin({
      filename: "style[contenthash].css",
    }),
  ],
};
