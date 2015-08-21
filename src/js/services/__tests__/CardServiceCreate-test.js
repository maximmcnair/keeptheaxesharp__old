/**
 * Card Service Spec
 */
import Qs from 'qs';

/**
 * @test CardService.create()
 */
describe('CardService.create()', function(){
  var mockNanoajax
    , CardService

  beforeEach(function(){
    // Create stub for ajax method
    mockNanoajax = {ajax: sinon.stub()};
    // require CardService
    CardService = require('./../CardService');
    // replace the module `request` with a stub object
    CardService.__Rewire__('nanoajax', mockNanoajax);
  });

  it('should call nanoajax with correct query', function(){
    var data = {front: 'front', back: 'back'}
    // Call method
    CardService.create(data)

    // Expect ajax to have been called
    expect(mockNanoajax.ajax.calledOnce).toBeTruthy();
    // Expect ajax to have called with correct method
    expect(mockNanoajax.ajax.args[0][0].method).toEqual('POST');
    // Expect it to call correct url
    expect(mockNanoajax.ajax.args[0][0].url).toContain('/api/card');
    // Expect body to contain correct data
    var stringifiedData = Qs.stringify(data);
    expect(mockNanoajax.ajax.args[0][0].body).toEqual(stringifiedData);
  });

  it('should return no error and card\'s object on SUCCESS', function(){
    mockNanoajax.ajax.yields(200, '{}')
    // Call method
    CardService.create({}, function(error, card){
      // Expect no error to exist
      expect(error).toBeNull();
      // Expect 'card' to be an object
      expect(card).toEqual(jasmine.any(Object));
    });
  });

  it('should return an error when ajax request is 404', function(){
    // Define ajax reponse
    mockNanoajax.ajax.yields(404, '{}');

    // Call method
    CardService.create({}, function(error, card){
      // Expect error to exist
      expect(error).toBeTruthy();
    });
  });
});
