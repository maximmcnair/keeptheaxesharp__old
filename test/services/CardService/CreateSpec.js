/**
 * Card Service Spec
 */
var sinon = require('sinon');
var chai = require('chai');
var mockery = require('mockery');
var expect = chai.expect;

import Qs from 'qs';


/**
 * @test CardService.create()
 */
describe('CardService.create()', function(){
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

    CardService = require('./../../../src/js/services/CardService');
  });

  after(function(){
    mockery.disable();
  });

  it('should call nanoajax with correct query', function(){
    var data = {front: 'front', back: 'back'}
    // Call method
    CardService.create(data)

    // Expect ajax to have been called
    expect(nanoStub.ajax.calledOnce).to.be.true;
    // Expect ajax to have called with correct method
    expect(nanoStub.ajax.args[0][0].method).to.equal('POST');
    // Expect it to call correct url
    expect(nanoStub.ajax.args[0][0].url).to.contain('/api/card');
    // Expect body to contain correct data
    var stringifiedData = Qs.stringify(data);
    expect(nanoStub.ajax.args[0][0].body).to.equal(stringifiedData);
  });

  it('should return no error and card\'s object on SUCCESS', function(){
    nanoStub.ajax.yields(200, '{}')
    // Call method
    CardService.create({}, function(error, card){
      // Expect no error to exist
      expect(error).to.be.null;
      // Expect 'card' to be an object
      expect(card).to.be.instanceof(Object);
    });
  });

  it('should return an error when ajax request is 404', function(){
    // Define ajax reponse
    nanoStub.ajax.yields(404, '{}');

    // Call method
    CardService.create({}, function(error, card){
      // Expect error to exist
      expect(error).to.be.true;
    });
  });
});
