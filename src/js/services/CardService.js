'use strict';

import nanoajax from 'nanoajax';
import Qs from 'qs';

import tags from './../fixtures/tags.js';

let CardService =
  /**
   * @desc Gets user's cards
   * @param {Object} query Query to get specific cards
   * @param {Function} cb Callback function on success and failure of ajax
   */
  { getAll: function (query, cb) {
      nanoajax.ajax({
        url: '/api/card?' + Qs.stringify(query)
      , method: 'GET'
      }, function(code, responseText) {
        // console.log('CardService.getAll response', code, JSON.parse(responseText));
        var response = JSON.parse(responseText);
        if(code === 200 || code === 201){
          cb(null, response);
        }else{
          cb(true);
        }
      });
    }
    /**
     * @desc Gets a card by it's id
     * @param {String} id The id of the request card
     * @param {Function} cb Callback function on success and failure of ajax
     */
  , getOne: function (id, cb) {
      nanoajax.ajax({
        url: '/api/card/' + id
      , method: 'GET'
      }, function(code, responseText) {
        // console.log('CardService.getAll response', code, JSON.parse(responseText));
        var response = JSON.parse(responseText);
        if(code === 200 || code === 201){
          cb(null, response);
        }else{
          cb(true);
        }
      });
    }
    /**
     * @desc Create a card
     * @param {Object} data Data of card intended to be created
     * @param {Function} cb Callback function on success and failure of ajax
     */
  , create: function (data, cb) {
      nanoajax.ajax({
        url: '/api/card'
      , body: Qs.stringify(data)
      , method: 'POST'
      }, function(code, responseText) {
        // console.log('CardService.create response', code, JSON.parse(responseText));
        var response = JSON.parse(responseText);
        if(code === 200 || code === 201){
          cb(null, response);
        }else{
          cb(true);
        }
      });
    }
    /**
     * @desc Update a card
     * @param {String} id Id of the specific card
     * @param {Object} data Data of card intended to be updated
     * @param {Function} cb Callback function on success and failure of ajax
     */
  , update: function (id, data, cb) {
      nanoajax.ajax({
        url: '/api/card/' + id
      , body: Qs.stringify(data)
      , method: 'PATCH'
      }, function(code, responseText) {
        // console.log('CardService.update response', code, responseText);
        var response = JSON.parse(responseText);
        if(code === 200 || code === 201){
          cb(null, response);
        }else{
          cb(true);
        }
      });
    }
    /**
     * @desc Delete a card
     * @param {String} id Id of the specific card
     * @param {Function} cb Callback function on success and failure of ajax
     */
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
    /**
     * @desc Tags user's tags
     * @param {Function} cb Callback function on success and failure of ajax
     */
  , getTags: function (cb) {
      nanoajax.ajax({
        url: '/api/tags'
      , method: 'GET'
      }, function(code, responseText) {
        // console.log('CardService.getTags response', code, JSON.parse(responseText));
        var response = JSON.parse(responseText);
        if(code === 200 || code === 201){
          cb(null, response);
        }else{
          cb(true);
        }
      });
    }
  };

export default CardService;
