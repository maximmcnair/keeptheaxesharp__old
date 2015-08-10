var cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , session = require('express-session')
  , path = require('path');

var MongoStore = require('connect-mongo')(session);

module.exports = function(app, logger, passport, options) {

  app.set('views', path.join(__dirname, '/views'));
  app.set('view engine', 'ejs');
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  // Express/Mongo session storage
  app.use(session({
    secret: options.properties.session.secret
  , resave: true
  , saveUninitialized: true
  , store: new MongoStore({
      db: options.properties.db
    , collection: 'sessions'
    })
  }));

  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());

};
