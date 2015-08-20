/**
 * Card Service Spec
 */
import Qs from 'qs';

/**
 * @test CardService.update()
 */
describe('CardService.update()', function(){
  var mockNanoajax
    , CardService
    , id = '123'
    , data =
      { front: 'front of card'
      , back: 'back of card'
      }

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
    CardService.update(id, data);
    // Expect ajax to have been called
    expect(mockNanoajax.ajax.calledOnce).toBeTruthy();
    // Expect ajax to have been called with correct method
    expect(mockNanoajax.ajax.args[0][0].method).toEqual('PATCH');
    // Expect url to call api
    expect(mockNanoajax.ajax.args[0][0].url).toContain('/api/card/');
    // Expect url to contain the id
    expect(mockNanoajax.ajax.args[0][0].url).toContain(id);
    // Expect url to have correctly stringify query
    var stringifyQuery = Qs.stringify(data);
    expect(mockNanoajax.ajax.args[0][0].body).toContain(stringifyQuery);
  });

  it('should return array returned by ajax request on success', function(){
    // Define ajax response
    mockNanoajax.ajax.yields(200, '{}');
    // Call method
    CardService.update(id, data, function(error, card){
      // Expect there to be no error
      expect(error).toBeNull();
      // Expect `card` to be an array
      expect(card).toEqual(jasmine.any(Object));
    });
  });

  it('should return error true when ajax request is 404', function(){
    // Define ajax response
    mockNanoajax.ajax.yields(404, '{}');
    // Call method
    CardService.update(id, data, function(error, responseText){
      // Expect there to be no error
      expect(error).toBeTruthy();
    });
  });

});
