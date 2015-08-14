/**
 * Card Service Spec
 */
var sinon = require('sinon');
var chai = require('chai');
var mockery = require('mockery');
var expect = chai.expect;

import Qs from 'qs';

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

    CardService = require('./../../../src/js/services/CardService');
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
