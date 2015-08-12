var path = require('path');
var PackageLoadersPlugin = require('webpack-package-loaders-plugin');

module.exports = {
  entry: ['./app/application.js'],
  output: {
    path: './www',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          require.resolve('babel-loader')
        ]
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [new PackageLoadersPlugin()]
};
