module.exports = {

  entry: './app.ts',

  output: {
    path: './dist', // the directory to output bundled files to
    publicPath: 'dist', // the web path prefix for bundled files
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
      },
    ],
  },
};
