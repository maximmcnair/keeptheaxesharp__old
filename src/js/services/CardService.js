'use strict';

import nanoajax from 'nanoajax';
import Qs from 'qs';

import tags from './../fixtures/tags.js';

let CardService =
  { getAll: function (cb) {
      nanoajax.ajax({
        url: '/api/card'
      , method: 'GET'
      }, function(code, responseText) {
        // console.log('CardService.getAll response', code, JSON.parse(responseText));
        // var response = JSON.parse(responseText);
        cb(code);
      });
    }
  // , create: function (data, cb) {
  //     nanoajax.ajax({
  //       url: '/api/card'
  //     , body: Qs.stringify(data)
  //     , method: 'POST'
  //     }, function(code, responseText) {
  //       console.log('CardService.create response', code, JSON.parse(responseText));
  //       var response = JSON.parse(responseText);
  //       cb(null, response);
  //     });
  //   }
  // , update: function (id, data, cb) {
  //     nanoajax.ajax({
  //       url: '/api/card/' + id
  //     , body: Qs.stringify(data)
  //     , method: 'PATCH'
  //   }, function(code, responseText) {
  //       console.log('CardService.update response', code, responseText);
  //       var response = JSON.parse(responseText);
  //       if(code === 200) cb(null, response);
  //     });
  //   }
  // , delete: function (id, cb) {
  //     nanoajax.ajax({
  //       url: '/api/card/' + id
  //     , method: 'DELETE'
  //     }, function(code, responseText, request) {
  //       console.log('CardService.delete response', code, responseText, request);
  //       if(responseText === 'OK') cb(null);
  //     });
  //   }
  // , getTags: function (cb) {
  //     cb(null, tags);
  //   }
  };

export default CardService;
