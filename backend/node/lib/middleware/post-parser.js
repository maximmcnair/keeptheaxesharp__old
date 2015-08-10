/*
 * A middleware shortcut to exclude the multipart middleware used by express's
 * bodyParser.
 */

var express = require('express')
  , bodyParser = require('body-parser')

module.exports = postParser

function postParser(options) {
  var json = bodyParser.json()
    , urlencoded = bodyParser.urlencoded({
        extended: true
      })

  return function postParser(req, res, next) {
    json(req, res, function (error) {
      if (error) return next(error)
      urlencoded(req, res, next)
    })
  }
}
