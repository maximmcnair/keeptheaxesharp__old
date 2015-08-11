var postParser = require('../middleware/post-parser')
  , errorMapper = require('../mongoose/error-mapper')

module.exports = function (app, prefix, model, options, middleware) {
  var logger = options.logger
    , connection = options.connection
    , Model = connection.model(model)

  /* Creation of a new document */
  app.post(prefix + '/', postParser(), middleware, function (req, res) {
    logger.debug('Creating new ' + model + ' document')
    var newDocument = new Model(req.body)
    newDocument.userId = req.user.id

    newDocument.save(function (error, document) {
      if (error) {
        logger.debug('Error creating new ' + model + ' document', error)
        res.json(400, errorMapper(error))
      } else {
        logger.debug('New ' + model + ' document created')
        res.json(201, document)
      }
    })
  })
}
