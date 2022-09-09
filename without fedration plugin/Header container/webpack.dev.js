const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:8083/",
      filename: "[name].[contenthash].js",
    },
    devServer: {
      port: 8083,
      historyApiFallback: {
        index: "/",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};