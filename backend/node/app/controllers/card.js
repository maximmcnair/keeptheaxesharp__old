/**
 * Module dependencies.
 */

var crudApi = require('../../lib/api/crud')
  , ensureAuthorized = require('../../lib/middleware/auth');

module.exports = function (app, options) {
  var logger = options.logger
    , model = 'Card';

  logger.info('Setting up card routes');

  crudApi(app, '/api/card', model, options, ensureAuthorized(logger));
};
