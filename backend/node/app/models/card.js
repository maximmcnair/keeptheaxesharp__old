/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function (logger, connection) {
  logger.info('Setting up Card model');

  /**
   * Card Schema
   */
  var CardSchema = new Schema(
      { front:
        { type: String
        , required: 'Question cannot be blank'
        }
      , back:
        { type: String
        , required: 'Answer cannot be blank'
        }
      , userId:
        { type: String
        }
      , tags: []
      });

  connection.model('Card', CardSchema);

};
