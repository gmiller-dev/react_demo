var mongoose = require('mongoose');

var mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri);
var db = mongoose.connection;

db.on('error', function(){
  throw new Error('unable to connect to database at ' + monogoUri);
});

require('../models/musician');

var Musician = mongoose.model('Musician');

Musician.create(
  { 'name': 'Ben', 'band':'DJ Code Red', "instrument": "Reason"},
  function (err){
    if(err) console.log(err);
  }
);

db.close();
console.log('Done');
return;
