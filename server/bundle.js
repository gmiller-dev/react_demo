var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var fs = require('fs');
var webpackConfig = require('../webpack.config.js');
var appConfig = require('../config/config');
var mainPath = path.resolve(__dirname, '..', 'app', 'main.js');

module.exports = function(){
  var bundleStart = null;
  var compiler = Webpack(webpackConfig);
  compiler.plugin('compile',function(){
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done',function(){
    console.log('Bundled in ' + (Date.now() - bundleStart)+' ms!');
  });

  var bundler = new WebpackDevServer(compiler, {
    publicPath: '/build/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors:true
    }
  });

  bundler.listen(appConfig.bundlerPort, appConfig.bundlerDom, function(){
    console.log('Bundling project, please wait');
  });
};

