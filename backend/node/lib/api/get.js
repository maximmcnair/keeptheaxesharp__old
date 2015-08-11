module.exports = function (app, prefix, model, options, middleware) {
  var logger = options.logger
    , connection = options.connection
    , Model = connection.model(model)

  /* Get all existing documents */
  app.get(prefix + '/', middleware, function (req, res) {
    Model.find({userId: req.user.id}, function (error, documents) {
      logger.debug('Finding all ' + model + ' documents')
      res.json(documents)
    })
  })

  /* Get an existing document by ID */
  app.get(prefix + '/:id', middleware, function (req, res) {
    Model.findById(req.params.id, function (error, document) {
      logger.debug('Searched ' + model + ' for ' + req.params.id, error, document)

      logger.debug(document.userId, req.user.id)
      if (document && document.userId == req.user.id) {
        res.json(document)
      } else {
        logger.error('Searched ' + model + ' for ' + req.params.id + ' Not Authorized')
        res.sendStatus(404)
      }
    })
  })
}
