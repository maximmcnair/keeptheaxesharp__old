/**
 * Card Service Spec
 */
var sinon = require('sinon');
var chai = require('chai');
var mockery = require('mockery');
var expect = chai.expect;

import Qs from 'qs';


/**
 * @test CardService.getTags()
 */
describe('CardService.getTags()', function(){
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
    CardService.getTags();

    // Expect ajax to have been called
    expect(nanoStub.ajax.calledOnce).to.be.true;
    // Expect ajax to have been called with correct method
    expect(nanoStub.ajax.args[0][0].method).to.equal('GET');
    // Expect it to call correct url
    expect(nanoStub.ajax.args[0][0].url).to.contain('/api/tags')
  });

  it('should return array returned by ajax request on success', function(){
    // Define ajax response
    nanoStub.ajax.yields(200, '["one", "two"]');
    // Call method
    CardService.getTags(function(error, tags){
      // Expect there to be no error
      expect(error).to.be.null;
      // Expect `card` to be an array
      expect(tags).to.be.instanceof(Array);
    });
  });

  it('should return error true when ajax request is 404', function(){
    // Define ajax response
    nanoStub.ajax.yields(404, '[]');
    // Call method
    CardService.getTags(function(error, tags){
      // Expect there to be no error
      expect(error).to.be.true;
    });
  });

});
