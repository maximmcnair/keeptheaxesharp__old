/**
 * Card Service Spec
 */
var sinon = require('sinon');
var chai = require('chai');
var mockery = require('mockery');
var expect = chai.expect;

import CardService from './../../../src/js/services/CardService';
import Qs from 'qs';

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

    CardService = require('./../../../src/js/services/CardService');
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
