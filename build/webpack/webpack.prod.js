const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: process.cwd() + "/build/out/",
    filename: "unused.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: ".(js|css)$",
      template: path.resolve(process.cwd(), "build/template/template.ejs"),
      window: {
        REPORT_RESULT: "{{REPORT_RESULT}}"
      }
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
  ]
});
