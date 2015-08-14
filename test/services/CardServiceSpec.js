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
  // describe('CardService.getAll() test', function(){
  //   var nanoStub, CardService
  //
  //   before(function(){
  //     // Setup mockery
  //     mockery.enable({
  //       warnOnReplace: false
  //     , warnOnUnregistered: false
  //     , useCleanCache: true
  //     });
  //     // Create stub for ajax method
  //     nanoStub = {ajax: sinon.stub()};
  //     // replace the module `request` with a stub object
  //     mockery.registerMock('nanoajax', nanoStub);
  //     // require CardService
  //     CardService = require('./../../src/js/services/CardService');
  //   });
  //
  //   after(function(){
  //     mockery.disable();
  //   });
  //
  //   it('should call nanoajax with correct query', function(){
  //     var query = {tags: ['Angular', 'Javascript']};
  //     // Call method
  //     CardService.getAll(query);
  //
  //     // Expect ajax to have been called
  //     expect(nanoStub.ajax.calledOnce).to.be.true;
  //     // Expect ajax to have been called with correct method
  //     expect(nanoStub.ajax.args[0][0].method).to.equal('GET')
  //     // Expect url to call api
  //     expect(nanoStub.ajax.args[0][0].url).to.contain('/api/card');
  //     // Expect url to have correctly stringify query
  //     var stringifyQuery = Qs.stringify(query);
  //     expect(nanoStub.ajax.args[0][0].url).to.contain(stringifyQuery);
  //   });
  //
  //   it('should return array returned by ajax request on success', function(){
  //     // Define ajax response
  //     nanoStub.ajax.yields(200, '["cardOne", "cardTwo"]');
  //     // Call method
  //     CardService.getAll({}, function(error, cards){
  //       // Expect there to be no error
  //       expect(error).to.be.null;
  //       // Expect `cards` to be an array
  //       expect(cards).to.be.instanceof(Array);
  //     });
  //   });
  //
  //   it('should return error true when ajax request is 404', function(){
  //     // Define ajax response
  //     nanoStub.ajax.yields(404, '["cardOne", "cardTwo"]');
  //     // Call method
  //     CardService.getAll({}, function(error, responseText){
  //       // Expect there to be no error
  //       expect(error).to.be.true;
  //     });
  //   });
  //
  // });
  //
  // /**
  //  * @test CardService.create()
  //  */
  // describe('CardService.create()', function(){
  //   var nanoStub, CardService
  //
  //   before(function(){
  //     mockery.enable({
  //       warnOnReplace: false,
  //       warnOnUnregistered: false,
  //       useCleanCache: true
  //     });
  //     // Create stub for ajax method
  //     nanoStub = {ajax: sinon.stub()};
  //     // replace the module `request` with a stub object
  //     mockery.registerMock('nanoajax', nanoStub);
  //
  //     CardService = require('./../../src/js/services/CardService');
  //   });
  //
  //   after(function(){
  //     mockery.disable();
  //   });
  //
  //   it('should call nanoajax with correct query', function(){
  //     var data = {front: 'front', back: 'back'}
  //     // Call method
  //     CardService.create(data)
  //
  //     // Expect ajax to have been called
  //     expect(nanoStub.ajax.calledOnce).to.be.true;
  //     // Expect ajax to have called with correct method
  //     expect(nanoStub.ajax.args[0][0].method).to.equal('POST');
  //     // Expect it to call correct url
  //     expect(nanoStub.ajax.args[0][0].url).to.contain('/api/card');
  //     // Expect body to contain correct data
  //     var stringifiedData = Qs.stringify(data);
  //     expect(nanoStub.ajax.args[0][0].body).to.equal(stringifiedData);
  //   });
  //
  //   it('should return no error and card\'s object on SUCCESS', function(){
  //     nanoStub.ajax.yields(200, '{}')
  //     // Call method
  //     CardService.create({}, function(error, card){
  //       // Expect no error to exist
  //       expect(error).to.be.null;
  //       // Expect 'card' to be an object
  //       expect(card).to.be.instanceof(Object);
  //     });
  //   });
  //
  //   if('should return an error when ajax request is 404', function(){
  //     // Define ajax reponse
  //     nanoStub.ajax.yields(404, '{}');
  //
  //     // Call method
  //     CardService.create({}, function(error, card){
  //       // Expect error to exist
  //       expect(error).to.be.true;
  //     });
  //   });
  // });

  /**
   * @test CardService.update()
   */
  describe('CardService.update()', function(){
    var nanoStub
      , CardService
      , id = '123'
      , data =
        { front: 'front of card'
        , back: 'back of card'
        }

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
      // Call method
      CardService.update(id, data);
      // Expect ajax to have been called
      expect(nanoStub.ajax.calledOnce).to.be.true;
      // Expect ajax to have been called with correct method
      expect(nanoStub.ajax.args[0][0].method).to.equal('PATCH');
      // Expect url to call api
      expect(nanoStub.ajax.args[0][0].url).to.contain('/api/card/');
      // Expect url to contain the id
      expect(nanoStub.ajax.args[0][0].url).to.contain(id);
      // Expect url to have correctly stringify query
      var stringifyQuery = Qs.stringify(data);
      expect(nanoStub.ajax.args[0][0].body).to.contain(stringifyQuery);
    });

    it('should return array returned by ajax request on success', function(){
      // Define ajax response
      nanoStub.ajax.yields(200, '{}');
      // Call method
      CardService.update(id, data, function(error, card){
        // Expect there to be no error
        expect(error).to.be.null;
        // Expect `card` to be an array
        expect(card).to.be.instanceof(Object);
      });
    });

    it('should return error true when ajax request is 404', function(){
      // Define ajax response
      nanoStub.ajax.yields(404, '{}');
      // Call method
      CardService.update(id, data, function(error, responseText){
        // Expect there to be no error
        expect(error).to.be.true;
      });
    });

  });

  /**
   * @test CardService.delete()
   */
  describe('CardService.delete()', function(){
    var nanoStub
      , CardService
      , id = '123'

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
      // Call method
      CardService.delete(id);

      // Expect ajax to have been called
      expect(nanoStub.ajax.calledOnce).to.be.true;
      // Expect ajax to have been called with correct method
      expect(nanoStub.ajax.args[0][0].method).to.equal('DELETE');
      // Expect it to call correct url
      expect(nanoStub.ajax.args[0][0].url).to.contain('/api/card/')
      // Expect url to contain the id
      expect(nanoStub.ajax.args[0][0].url).to.contain(id);
    });

    it('should return no error on 200', function(){
      // Define ajax response
      nanoStub.ajax.yields(200, 'OK');
      // Call method
      CardService.delete(id, function(error){
        // Expect there to be no error
        expect(error).to.be.null;
      });
    });

    it('should return an error if 404', () => {
      // Define ajax response
      nanoStub.ajax.yields(404, '{}');
      // Call method
      CardService.delete(id, function(error, responseText){
        // Expect there to be no error
        expect(error).to.be.true;
      });
    });

  });

});
