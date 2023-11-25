const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Steam - New Evolution"
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    // static: path.join(__dirname, '/dist/'),
    host: 'localhost',
    port: 8080,
    hot: true
  }
};