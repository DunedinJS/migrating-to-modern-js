var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './source/index.js',

  output: {
    path: './dist', // the directory to output bundled files to
    filename: 'bundle-[hash].js',
  },

  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './source/index.html' }),
  ],

  devtool: 'source-map',

};
