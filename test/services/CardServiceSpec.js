/**
 * Card Service Spec
 */
var sinon = require('sinon');
var chai = require('chai');
var mockery = require('mockery');
var expect = chai.expect;

import CardService from './../../src/js/services/CardService';
import Qs from 'qs';

describe('Card Service Spec', function(){

  /**
   * @test CardService.getAll()
   */
  describe('CardService.getAll() test', function(){
    var nanoStub, CardService

    before(function(){
      mockery.enable({
        warnOnReplace: false,
        warnOnUnregistered: false,
        useCleanCache: true
      });
      // Create stub for ajax method
      nanoStub = {ajax: sinon.stub()};
      // replace the module `request` with a stub object
      mockery.registerMock('nanoajax', nanoStub);

      CardService = require('./../../src/js/services/CardService');
    });

    after(function(){
      mockery.disable();
    });

    it('should call nanoajax with correct query', function(){
      var query = {tags: ['Angular', 'Javascript']};
      // Call method
      CardService.getAll(query);

      // Expect ajax to have been called
      expect(nanoStub.ajax.calledOnce).to.be.true;
      // Expect ajax to have been called with correct method
      expect(nanoStub.ajax.args[0][0].method).to.equal('GET')
      // Expect url to call api
      expect(nanoStub.ajax.args[0][0].url).to.contain('/api/card');
      // Expect url to have correctly stringify query
      var stringifyQuery = Qs.stringify(query);
      expect(nanoStub.ajax.args[0][0].url).to.contain(stringifyQuery);
    });

    it('should return array returned by ajax request on success', function(){
      // Define ajax response
      nanoStub.ajax.yields(200, '["cardOne", "cardTwo"]');
      // Call method
      CardService.getAll({}, function(error, cards){
        // Expect there to be no error
        expect(error).to.be.null;
        // Expect `cards` to be an array
        expect(cards).to.be.instanceof(Array);
      });
    });

    it('should return error true when ajax request is 404', function(){
      // Define ajax response
      nanoStub.ajax.yields(404, '["cardOne", "cardTwo"]');
      // Call method
      CardService.getAll({}, function(error, responseText){
        // Expect there to be no error
        expect(error).to.be.true;
      });
    });

  });

});
