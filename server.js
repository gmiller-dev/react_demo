var express = require('express');
var bodyParser = require('body-parser');
var jade = require('jade');
var path = require('path');
var httpProxy = require('http-proxy');
var mongoose = require('mongoose');
var fs = require('fs');

var config = require('./config/config');
var routes = require('./routes');

var app = express();
var proxy = httpProxy.createProxyServer();
var port = config.isProduction ? process.env.PORT : config.devPort; // set the port
var publicPath = path.resolve(__dirname, 'public');

// App
// Configure app to use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('views', __dirname+ '/views');
app.set('view engine','jade');
app.use(express.static(publicPath));

// Set up bundler proxy for development
if(!config.isProduction){
  var bundle = require('./server/bundle.js');
  bundle();
  app.all('/build/*', function (req, res){
    proxy.web(req,res,{
      target: 'http://' + config.bundlerDom + ':' + config.bundlerPort
    });
  });
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});
//=========================================================================


// Database
mongoose.connect(config.dbUri);
var db = mongoose.connection;
db.on('error', function(){
  throw new Error('unable to connect to database at ' + config.dbUri);
});

//=========================================================================

// Models
require('./models');

//=========================================================================

// Routes
routes(app);
//=========================================================================


// Error handling
if(config.isProduction){
  app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    res.render('not_found.jade');
  });
}
//=========================================================================

app.listen(port,function(){
  console.log('Listening on ' + port);
});
