/**
 * Maps mongoose errors to an array for easier handling.
 */
module.exports = function (errors) {
  var newArray = []

  // Catch the weird non-mapped internal errors
  if (!errors.errors) {
    var betterError = {}
    betterError[errors.path] = errors
    errors.errors = betterError
  }

  Object.keys(errors.errors).forEach(function (key) {
    newArray.push(errors.errors[key])
  })

  return newArray
}