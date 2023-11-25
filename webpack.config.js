const path = require('path');
const webpack = require('webpack');
const { merge } = require("webpack-merge");
const devWebpack = require('./webpack/webpack.dev.js');
const prodWebpack = require('./webpack/webpack.prod.js');

module.exports = env => {
  const isProd = !!env?.production;
  return merge(
    isProd ? prodWebpack : devWebpack,
   {
   entry: {
     'index': path.join(__dirname, 'src', 'index.js'),
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
        configFile: './tsconfig.json'
      }
    }, {
       test: /\.s[ac]ss$/i,
       use: [
         // Creates `style` nodes from JS strings
         "style-loader",
         // Translates CSS into CommonJS
         "css-loader",
         // Compiles Sass to CSS
         "sass-loader",
         //Consider about using resolve-url-loader for sass: https://github.com/bholloway/resolve-url-loader/blob/v5/packages/resolve-url-loader/README.md
       ],
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
     }]
   },
   resolve: {
     extensions: ['.mjs', '.js', '.svelte', '.scss', '.sass', '.css'],
     mainFields: ['svelte', 'browser', 'module', 'main'],
     conditionNames: ['svelte', 'browser', 'import']
   },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
   ]
 });
} 