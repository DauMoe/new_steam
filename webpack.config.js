const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const devWebpack = require('./webpack/webpack.dev.js');
const prodWebpack = require('./webpack/webpack.prod.js');

module.exports = env => {
  const isProd = !!env?.production;
  return merge(
    isProd ? prodWebpack : devWebpack,
   {
   entry: {
     'index': path.join(__dirname, 'src', 'index.ts'),
   },
   output: {
     path: path.join(__dirname, 'dist'),
     filename: "[name].js",
    //  chunkFilename: '[name].js',
   },
   module: {
     rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
      options: {
        transpileOnly: !isProd,
        configFile: path.resolve(__dirname, 'tsconfig.json')
      }
    }, {
      test: /\.s[ac]ss$/i,
      include: [
        path.resolve(__dirname, 'src', 'styles')
      ],
      use: ["style-loader", "css-loader", "sass-loader"]
     }, {
      test: /\.svelte$/,
      loader: 'svelte-loader',
      options: {
        compilerOptions: {
          dev: !isProd
        },
        emitCss: true,
        hotReload: !isProd,
        preprocess: require('svelte-preprocess')(),
        hotOptions: {
          preserveLocalState: false,
          noPreserveStateKey: '@!hmr',
          noReload: false,
          optimistic: false,
          acceptAccessors: true,
          acceptNamedExports: true,
        }
      }
    },
    {
      // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
      test: /node_modules\/svelte\/.*\.mjs$/,
      resolve: {
        fullySpecified: false
      }
    }, {
       // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
       test: /node_modules\/svelte\/.*\.mjs$/,
       resolve: {
         fullySpecified: false
       }
     }, {
      test: /\.(png|svg|jpg|gif)$/,
      loader: 'file-loader',
      options: { name: !isProd ? '[name].[ext]' : '[name].[contenthash].[ext]', outputPath: 'assets' }
    }]
   },
   resolve: {
     extensions: ['.mjs', '.js', '.ts', '.svelte', '.scss', '.sass', '.css'],
     mainFields: ['svelte', 'browser', 'module', 'main'],
     conditionNames: ['svelte', 'browser', 'import'],
     modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src')
     ]
   },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Welcome to Steam',
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: path.resolve(__dirname, 'src', 'assets', 'icons', 'SteamLogoBlack.svg'),
    }),
   ]
 });
} 