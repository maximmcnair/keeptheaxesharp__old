module.exports = function (app, prefix, model, options, middleware) {
  var logger = options.logger
    , connection = options.connection
    , Model = connection.model(model)

  /* Remove an existing document by ID */
  app.delete(prefix + '/:id', middleware, function (req, res) {
    Model.findByIdAndRemove(req.params.id, function (error, document) {
      logger.debug('Searched ' + model + ' for ' + req.params.id, error, document)

      if (document) {
        res.sendStatus(200)
      } else {
        res.sendStatus(404)
      }
    })
  })
}
