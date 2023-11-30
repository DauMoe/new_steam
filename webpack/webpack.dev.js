const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // static: path.join(__dirname, '/dist/'),
    host: 'localhost',
    port: 8080,
    client: {
      reconnect: 3,
      overlay: {
        errors: true,
        warnings: false, //Hide warning overlay
        runtimeErrors: true,
      },
    },
    open: false
  }
};