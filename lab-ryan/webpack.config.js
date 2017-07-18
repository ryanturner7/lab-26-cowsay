'use strict';


const HtmlPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');


module.exports = {
  // tells webpack where to load the app from
  entry: `${__dirname}/src/main.js`,
  // tells webpack where to put the bundles once their built
  output: {
    filename: 'bundle-[hash].js', //syntax provided by webpack
    // tells webpack where to put all the bundles once its done
    path: `${__dirname}/build`,
    //tells webpack what to prefix all relecant src and href tags with i
    publicPath: '/',
  },
  plugins: [
    // adds dynamic script/link tage to index.html
    new HtmlPlugin({template: `${__dirname}/src/index.html`}),
    // makes a new bundle with our styles
    new ExtractPlugin('bundle-[hash].css'),
  ],
  module:{
    // configure loaders
    rules: [
      // turns jsx and es6 into es5 so those browsers can support
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};
