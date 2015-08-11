/**
 * Generic require login routing middleware
 */

module.exports = function (logger) {

  return function (req, res, next) {

    // Check if user is active first
    // if ( req.user && req.user.active ) {
    if ( req.user ) {
      next()
    } else {
      return res.sendStatus(403)
    }

  }

}
