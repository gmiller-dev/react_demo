module.exports = {
  index: function(req,res){
    res.render('index.jade', {title: 'Welcome'});
  }
};
