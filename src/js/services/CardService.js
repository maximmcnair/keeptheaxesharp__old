'use strict';

import nanoajax from 'nanoajax';
import Qs from 'qs';

import tags from './../fixtures/tags.js';

let CardService =
  { getAll: function (query, cb) {
      nanoajax.ajax({
        url: '/api/card?' + Qs.stringify(query)
      , method: 'GET'
      }, function(code, responseText) {
        // console.log('CardService.getAll response', code, JSON.parse(responseText));
        var response = JSON.parse(responseText);
        if(code === 200){
          cb(null, response);
        }else{
          cb(true);
        }
      });
    }
  , getOne: function (id, cb) {
      nanoajax.ajax({
        url: '/api/card/' + id
      , method: 'GET'
      }, function(code, responseText) {
        // console.log('CardService.getAll response', code, JSON.parse(responseText));
        var response = JSON.parse(responseText);
        if(code === 200){
          cb(null, response);
        }else{
          cb(true);
        }
      });
    }
  , create: function (data, cb) {
      nanoajax.ajax({
        url: '/api/card'
      , body: Qs.stringify(data)
      , method: 'POST'
      }, function(code, responseText) {
        // console.log('CardService.create response', code, JSON.parse(responseText));
        var response = JSON.parse(responseText);
        if(code === 200){
          cb(null, response);
        }else{
          cb(true);
        }
      });
    }
  , update: function (id, data, cb) {
      nanoajax.ajax({
        url: '/api/card/' + id
      , body: Qs.stringify(data)
      , method: 'PATCH'
      }, function(code, responseText) {
        // console.log('CardService.update response', code, responseText);
        var response = JSON.parse(responseText);
        if(code === 200){
          cb(null, response);
        }else{
          cb(true);
        }
      });
    }
  , delete: function (id, cb) {
      nanoajax.ajax({
        url: '/api/card/' + id
      , method: 'DELETE'
      }, function(code, responseText) {
        // console.log('CardService.delete response', code, responseText);
        if(responseText === 'OK'){
          cb(null);
        }else{
          cb(true);
        }
      });
    }
  , getTags: function (cb) {
      nanoajax.ajax({
        url: '/api/tags'
      , method: 'GET'
      }, function(code, responseText) {
        // console.log('CardService.getTags response', code, JSON.parse(responseText));
        var response = JSON.parse(responseText);
        if(code === 200){
          cb(null, response);
        }else{
          cb(true);
        }
      });
    }
  };

export default CardService;
