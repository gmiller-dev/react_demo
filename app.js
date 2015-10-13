var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jade = require('jade');
var url = require('url');

// Configure app to use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set the port

// App
app.set('views', __dirname+ '/views');
app.set('view engine','jade');
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/',function(req,res){
  res.render('index.jade', {title: 'Welcome'});
});


// Error handling
app.use(function(req,res,next){
  var err = new Error('Not Found');
  err.status = 404;
  res.render('not_found.jade');
});


app.listen(port,function(){
  console.log('Listening on ' + port);
});
