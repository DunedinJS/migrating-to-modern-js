var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: './app.js',

  output: {
    path: './dist', // the directory to output bundled files to
    publicPath: 'dist', // the web path prefix for bundled files
    filename: 'bundle.js',
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
    ],
  },
};
