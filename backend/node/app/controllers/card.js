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

  /* Get all existing documents */
  app.get(prefix + '/', function (req, res) {
    var query = {userId: req.user.id}
    if(req.query.tags) query.tags = { $in: req.query.tags }
    Model.find(query, function (error, documents) {
      logger.info('Finding all ' + model + ' documents', query)
      logger.debug('Finding all ' + model + ' documents', query, documents)
      res.json(documents)
    })
  })

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
