var Webpack = require('webpack');
var path = require('path');
var appConfig = require('./config/config');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');

var config = {
  devtool: 'eval',
  entry: [
    // For hot style updates
    'webpack/hot/dev-server',

    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://' + appConfig.bundlerDom + ':' + appConfig.bundlerPort,

    // app entry
    mainPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [nodeModulesPath]
      }
    ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
