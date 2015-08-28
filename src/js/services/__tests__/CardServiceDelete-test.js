/**
 * Card Service Spec
 */
import Qs from 'qs';

/**
 * @test CardService.delete()
 */
describe('CardService.delete()', function(){
  var mockNanoajax
    , CardService
    , id = '123'

  beforeEach(function(){
    // Create stub for ajax method
    mockNanoajax = {ajax: sinon.stub()};
    // require CardService
    CardService = require('./../CardService');
    // replace the module `request` with a stub object
    CardService.__Rewire__('nanoajax', mockNanoajax);
  });

  it('should call nanoajax with correct query', function(){
    // Call method
    CardService.delete(id);

    // Expect ajax to have been called
    expect(mockNanoajax.ajax.calledOnce).toBeTruthy();
    // Expect ajax to have been called with correct method
    expect(mockNanoajax.ajax.args[0][0].method).toEqual('DELETE');
    // Expect it to call correct url
    expect(mockNanoajax.ajax.args[0][0].url).toContain('/api/card/')
    // Expect url to contain the id
    expect(mockNanoajax.ajax.args[0][0].url).toContain(id);
  });

  it('should return no error on 200', function(){
    // Define ajax response
    mockNanoajax.ajax.yields(200, 'OK');
    // Call method
    CardService.delete(id, function(error){
      // Expect there to be no error
      expect(error).toBeNull();
    });
  });

  it('should return an error if 404', () => {
    // Define ajax response
    mockNanoajax.ajax.yields(404, '{}');
    // Call method
    CardService.delete(id, function(error, responseText){
      // Expect there to be no error
      expect(error).toBeTruthy();
    });
  });

});
