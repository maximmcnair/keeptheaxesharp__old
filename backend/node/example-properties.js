var _ = require('lodash');

var baseProperties =
  { port: 3600
  , root: __dirname
  , session:
    { secret: '' }
  /* eslint-disable camelcase */
  , dbOptions:
    { native_parser: true }
  /* eslint-enable camelcase */
  }

, properties =
  { development:
    { port: 3600
    , db: 'mongodb://localhost/keeptheaxesharp'
    , github:
      { id: ''
      , secret: ''
      , callbackURL: 'http://127.0.0.1:3600/auth/github/callback'
      }
    }
  };

module.exports = function () {
  var env = process.env.NODE_ENV || 'development';
  return _.extend({ environment: env }, baseProperties, properties[env]);
};
