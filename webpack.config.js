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
       test: /.jsx?$/,
       include: [
         path.resolve(__dirname, 'src')
       ],
       exclude: [
         path.resolve(__dirname, 'node_modules')
       ],
       loader: 'babel-loader',
       options: {
         presets: [
           ["@babel/env", {
             "targets": {
               "browsers": "last 2 chrome versions"
             }
           }]
         ]
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
       test: /\.(html|svelte)$/,
       use: {
         loader: 'svelte-loader',
         options: {
           compilerOptions: {
             // NOTE Svelte's dev mode MUST be enabled for HMR to work
             dev: !isProd, // Default: false
           },
 
           // NOTE emitCss: true is currently not supported with HMR
           // Enable it for production to output separate css file
           emitCss: isProd, // Default: false
           // Enable HMR only for dev mode
           hotReload: !isProd, // Default: false
           // Extra HMR options, the defaults are completely fine
           // You can safely omit hotOptions altogether
           hotOptions: {
             // Prevent preserving local component state
             preserveLocalState: false,
 
             // If this string appears anywhere in your component's code, then local
             // state won't be preserved, even when noPreserveState is false
             noPreserveStateKey: '@!hmr',
 
             // Prevent doing a full reload on next HMR update after fatal error
             noReload: false,
 
             // Try to recover after runtime errors in component init
             optimistic: false,
 
             // --- Advanced ---
 
             // Prevent adding an HMR accept handler to components with
             // accessors option to true, or to components with named exports
             // (from <script context="module">). This have the effect of
             // recreating the consumer of those components, instead of the
             // component themselves, on HMR updates. This might be needed to
             // reflect changes to accessors / named exports in the parents,
             // depending on how you use them.
             acceptAccessors: true,
             acceptNamedExports: true,
           }
         }
       }
     },
     {
       // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
       test: /node_modules\/svelte\/.*\.mjs$/,
       resolve: {
         fullySpecified: false
       }
     }]
   },
   resolve: {
     extensions: ['.mjs', '.js', '.svelte'],
     mainFields: ['svelte', 'browser', 'module', 'main'],
     conditionNames: ['svelte', 'browser', 'import']
   },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
   ]
 });
} 