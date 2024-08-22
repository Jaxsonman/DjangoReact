const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build/static"), // Ensure this path matches STATICFILES_DIRS in Django
    filename: "bundle.js",
    publicPath: "/static/", // This should match STATIC_URL in Django
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
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new HtmlWebpackPlugin({
      template: "./templates/index.html", // Adjust if your index.html is elsewhere
    }),
  ],
  stats: {
    children: true, // This will show detailed information about child compilations
  },
};
