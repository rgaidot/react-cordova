var path = require('path');
var webpack = require("webpack");

module.exports = {
  context: __dirname + '/app',
  entry: ['./application.js'],
  output: {
    path: __dirname + '/www/',
    filename: 'bundle.js'
  },
  resolve: {
    root: [path.join(__dirname, "bower_components")]
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      },
      { test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|woff|ttf|eot|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
};
