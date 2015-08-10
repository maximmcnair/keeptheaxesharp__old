var async = require('async')

module.exports = function (model, object, field, value, callback) {
  var query = {}
  query[field] = value

  model.find(query, function (error, foundDocuments) {
    async.each(foundDocuments, function (document, callback) {
      // If the IDs are the same, then it's the same object, it can be updated
      if (String(document._id) === String(object._id)) {
        return callback()
      }
      return callback('Value is not unique')
    }, function (error) {
      callback(!error)
    })
  })
}