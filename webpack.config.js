const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './source/index.jsx',

  output: {
    path: './dist', // the directory to output bundled files to
    filename: 'bundle-[hash].js',
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader?sourceMap!css-loader?sourceMap',
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './source/index.html' }),
  ],

  devtool: 'source-map',

  eslint: {
    quiet: true,
  },

};
