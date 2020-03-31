const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  entry: path.resolve(process.cwd(), "./src/report/assets/javascript/index.js"),
  target: "node",
  output: {
    path: process.cwd() + "/build/out/",
    filename: "unused.js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
