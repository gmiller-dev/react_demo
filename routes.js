module.exports = function(app){
  // Require controllers
  var root = require('./controllers/root');

  // Example of using a controller
  // var musicians = require('./controllers/musicians');
  //=========================================================================

  app.get('/', root.index);

  // Example routes for muscians controller
  // app.get('/musicians', musicians.findAll);
  // app.get('/musicians/:id', musicians.findById);

};
