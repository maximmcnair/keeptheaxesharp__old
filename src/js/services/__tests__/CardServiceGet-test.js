/**
 * Card Service Spec
 */
import Qs from 'qs';

/**
 * @test CardService.getAll()
 */
describe('CardService.getAll() test', function(){
  var mockNanoajax
    , CardService
    , revert;

  beforeEach(function(){
    // Create stub for ajax method
    mockNanoajax = {ajax: sinon.stub()};
    // require CardService
    CardService = require('./../CardService');
    // replace the module `request` with a stub object
    CardService.__Rewire__('nanoajax', mockNanoajax);
  });

  it('should call nanoajax with correct query', function(){
    var query = {tags: ['Angular', 'Javascript']};
    // Call method
    CardService.getAll(query);

    // Expect ajax to have been called
    expect(mockNanoajax.ajax.calledOnce).toBeTruthy();
    // Expect ajax to have been called with correct method
    expect(mockNanoajax.ajax.args[0][0].method).toEqual('GET')
    // Expect url to call api
    expect(mockNanoajax.ajax.args[0][0].url).toContain('/api/card');
    // Expect url to have correctly stringify query
    var stringifyQuery = Qs.stringify(query);
    expect(mockNanoajax.ajax.args[0][0].url).toContain(stringifyQuery);
  });

  it('should return array returned by ajax request on success', function(){
    // Define ajax response
    mockNanoajax.ajax.yields(200, '["cardOne", "cardTwo"]');
    // Call method
    CardService.getAll({}, function(error, cards){
      // Expect there to be no error
      expect(error).toBeNull();
      // Expect `cards` to be an array
      expect(cards).toEqual(jasmine.any(Array));
    });
  });

  it('should return error true when ajax request is 404', function(){
    // Define ajax response
    mockNanoajax.ajax.yields(404, '["cardOne", "cardTwo"]');
    // Call method
    CardService.getAll({}, function(error, responseText){
      // Expect there to be no error
      expect(error).toBeTruthy();
    });
  });

});
