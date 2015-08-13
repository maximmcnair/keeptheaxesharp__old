/**
 * Module dependencies.
 */

var crudApi = require('../../lib/api/crud')
  , ensureAuthorized = require('../../lib/middleware/auth');

module.exports = function (app, options) {
  var logger = options.logger
    , model = 'Card'
    , Model = options.connection.model(model)
    , prefix = '/api/card'

  logger.info('Setting up card routes');



  crudApi(app, prefix, model, options, ensureAuthorized(logger));

  app.get('/api/tags', function (req, res) {
    Model.find({userId: req.user.id}).distinct('tags', function(error, tags) {
      if(error){
        res.send(400);
      }else{
        res.json(tags);
      }
    });
  });
};
