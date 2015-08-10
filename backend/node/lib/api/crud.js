var actions =
    { get: require('./get')
    , post: require('./post')
    , patch: require('./patch')
    , delete: require('./delete')
    }

module.exports = function (app, prefix, model, options, middleware, verbs) {

  if (!middleware) {
    middleware = []
  }

  if (!verbs) {
    verbs = ['get', 'post', 'patch', 'delete']
  }

  var logger = options.logger

  logger.info(middleware)

  logger.info('Setting up CRUD endpoints for ' + model)

  verbs.forEach(function (verb) {
    actions[verb](app, prefix, model, options, middleware)
  })
}
