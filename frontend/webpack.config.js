const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/js"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "static"),
    publicPath: "/static/js/",
    historyApiFallback: true, // This will ensure client-side routing works
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new HtmlWebpackPlugin({
      template: "./templates/index.html", // Adjust if your index.html is elsewhere
      minify: false,
    }),
  ],
  stats: {
    children: true, // This will show detailed information about child compilations
  },
  devtool: "source-map", // Helps with debugging
};
