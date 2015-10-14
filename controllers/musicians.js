var mongoose = require('mongoose');
var Musician = mongoose.model('Musician');

module.exports = {
  findAll: function(req, res){
    Musician.find({},function(err, results) {
      return res.send(results);
    });
  },

  findById: function(req, res){
    var id = req.params.id;
    Musician.findOne({'_id':id},function(err,result){
      return res.send(result);
    });
  }
};

