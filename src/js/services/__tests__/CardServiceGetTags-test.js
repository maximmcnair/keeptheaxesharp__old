/**
 * Card Service Spec
 */
import Qs from 'qs';

/**
 * @test CardService.getTags()
 */
describe('CardService.getTags()', function(){
  var mockNanoajax
    , CardService
    , id = '123'

  beforeEach(function(){
    // Create stub for ajax method
    mockNanoajax = {ajax: sinon.stub()};
    // require CardService
    CardService = require('./../CardService');
    // replace the module `request` with a stub object
    revert = CardService.__Rewire__('nanoajax', mockNanoajax);
  });

  it('should call nanoajax with correct query', function(){
    // Call method
    CardService.getTags();

    // Expect ajax to have been called
    expect(mockNanoajax.ajax.calledOnce).toBeTruthy();
    // Expect ajax to have been called with correct method
    expect(mockNanoajax.ajax.args[0][0].method).toEqual('GET');
    // Expect it to call correct url
    expect(mockNanoajax.ajax.args[0][0].url).toContain('/api/tags')
  });

  it('should return array returned by ajax request on success', function(){
    // Define ajax response
    mockNanoajax.ajax.yields(200, '["one", "two"]');
    // Call method
    CardService.getTags(function(error, tags){
      // Expect there to be no error
      expect(error).toBeNull();
      // Expect `card` to be an array
      expect(tags).toEqual(jasmine.any(Array));
    });
  });

  it('should return error true when ajax request is 404', function(){
    // Define ajax response
    mockNanoajax.ajax.yields(404, '[]');
    // Call method
    CardService.getTags(function(error, tags){
      // Expect there to be no error
      expect(error).toBeTruthy();
    });
  });

});
