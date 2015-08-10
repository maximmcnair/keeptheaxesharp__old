var express = require('express')
  , passport = require('passport')
  , bunyan = require('bunyan')
  , path = require('path');

// Load configurations
var properties = require('./properties')();
var debug = properties.env !== 'production';
var mongoose = require('mongoose');

// Bootstrap db connection
var connection = mongoose.createConnection(properties.db, properties.dbOptions)

// Configure logger
  , logger = bunyan.createLogger(
      { name: 'Keep The Axe Sharp'
      , level: debug ? 'debug' : 'info'
      , src: debug ? true : false
      }
    );

// Once connected, set everything up
connection.once('open', function connectionOpen() {
  // Bootstrap models
  [ 'card'
  ].forEach(function (model) {
    require(path.join(__dirname, '/app/models/' + model))(logger, connection);
  });

  var options =
    { logger: logger
    , properties: properties
    , connection: connection
    };

  // Bootstrap passport config
  require('./lib/passport')(passport, connection, options);

  var app = express();

  // Express settings
  require('./app')(app, logger, passport, options);

  // Bootstrap routes
  require(path.join(__dirname, '/app/controllers/auth'))(app, options, passport);
  require(path.join(__dirname, '/app/controllers/card'))(app, options, passport);
  app.use(express.static(path.join(__dirname, '/../../public')));

  // Start the app by listening on <port>
  app.listen(properties.port);

  logger.info('Express app started on port', properties.port);
  logger.info('App is in', properties.environment, 'environment');

  // Expose app
  exports = module.exports = app;

});
