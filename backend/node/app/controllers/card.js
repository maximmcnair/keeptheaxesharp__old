/**
 * Module dependencies.
 */

var crudApi = require('../../lib/api/crud')
  , ensureAuthorized = require('../../lib/middleware/auth')
  , postParser = require('../../lib/middleware/post-parser')
  , errorMapper = require('../../lib/mongoose/error-mapper');

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

  /* Override post */
  app.post(prefix + '/', postParser(), function (req, res) {
    logger.debug('Creating new ' + model + ' document')
    var newDocument = new Model(req.body)
    newDocument.userId = req.user.id

    newDocument.save(function (error, document) {
      // Turn onboarding off if user has gone through it
      if(req.user.onboarded === false){
        options.connection.model('User').findById(req.user.id, function(error, user){
          if(!error){
            user.onboarded = true;
            user.save(function (error) {
              if(error) logger.error(error);
            });
          }
        })
      }
      if (error) {
        logger.debug('Error creating new ' + model + ' document', error)
        res.json(400, errorMapper(error))
      } else {
        logger.debug('New ' + model + ' document created')
        res.json(201, document)
      }
    })
  })

  /* setup crud */
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
