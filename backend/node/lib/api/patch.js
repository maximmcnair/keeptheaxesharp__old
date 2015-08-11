var postParser = require('../middleware/post-parser')
  , errorMapper = require('../mongoose/error-mapper')

module.exports = function (app, prefix, model, options, middleware) {
  var logger = options.logger
    , connection = options.connection
    , Model = connection.model(model)

  /* Partial or full update of an existing document */
  app.patch(prefix + '/:id', postParser(), middleware, function (req, res) {
    logger.debug('Patch request card' + req.params.id)
    Model.findById(req.params.id, function (error, document) {
      logger.debug('Searched ' + model + ' for ' + req.params.id, error, document)

      // Remove internal values that should not be overwritten
    ; delete req.body._id
    ; delete req.body.__v

      if (document) {
        Object.keys(req.body).forEach(function (key) {
          document[key] = req.body[key]
        })

        // if (document.isModified()) {
          document.save(function (error, updatedDocument) {
            if (error) {
              logger.debug('Saving ' + model + ' failed', error)
              res.json(400, errorMapper(error))
            } else {
              logger.debug('Saving ' + model + ' success', updatedDocument)
              res.json(200, updatedDocument)
            }
          })
        // } else {
        //   res.send(200)
        // }

      } else {
        res.send(404)
      }
    })
  })
}
