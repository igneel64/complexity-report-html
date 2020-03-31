const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(process.cwd(), "./src/report/assets/javascript/index.js"),
  output: {
    path: process.cwd() + "/src/report",
    filename: ""
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: ".(js|css)$",
      template: path.resolve(process.cwd(), "./src/report/template.ejs"),
      window: {
        REPORT_RESULT: "{{REPORT_RESULT}}"
      }
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
  ]
};
