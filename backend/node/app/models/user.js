/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function (logger, connection) {
  logger.info('Setting up User model');

  /**
   * User Schema
   */
  var UserSchema = new Schema(
      { name:
        { type: String
        , required: 'Name cannot be blank'
        }
      , email:
        { type: String
        , required: 'Email cannot be blank'
        }
      , username:
        { type: String
        }
      , provider:
        { type: String
        }
      , github:
        { type: Schema.Types.Mixed
        }
      });

  connection.model('User', UserSchema);

};
