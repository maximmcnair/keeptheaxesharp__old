/**
 * Card Service Spec
 */

'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

import CardService from './../../src/js/services/CardService';
import nanoajax from 'nanoajax';

describe('Card Service Spec', function(){

  /**
   * @test CardService.getAll()
   */
  describe('CardService.getAll() test', function(){

    it('should call callback with correct greeting', function () {
        // var cb = sinon.spy();
        //
        // CardService.getAll(cb);
        //
        // // expect(cb).to.have.been.calledWith(null);
        // expect(CardService.getAll).withExactArgs


        sinon.stub(nanoajax, 'ajax', function(params, callback){
          callback(200, 'hello');
        });

        // nanoajax.ajax({}, function(code, responseText){
        //   expect(code).to.equal(200);
        //   expect(responseText).to.equal('hello');
        // });


        CardService.getAll(function(error){
          expect(error).to.equal(200);
        });

        sinon.mock(nanoajax).expects('ajax').withExactArgs({
          url: '/api/card'
        , method: 'GET'
        })

    });

  });

});


/**
 * Card Service Spec
 */

// 'use strict';
//
// // import {expect} from 'chai';
//
// describe('Card Service Spec', function(){
//
//   /**
//    * @test CardService.getAll()
//    */
//   describe('CardService.getAll() test', function(){
//     it('should return error if it fails');
//     // Test successful request
//     it('should return array of cards');
//     it('should return an error of null');
//   });
//
//   /**
//    * @test CardService.create()
//    */
//   describe('CardService.create()', function(){
//     it('should return an error if it fails');
//     // Test successful request
//     it('should return newly create card with an _id');
//     it('should return an error of null');
//   });
//
//   /**
//    * @test CardService.update()
//    */
//   describe('CardService.update()', function(){
//     it('should return an error if it fails');
//     // Test successful request
//     it('should return card object');
//     it('should return an error of null');
//   });
//
//   /**
//    * @test CardService.delete()
//    */
//   describe('CardService.delete()', function(){
//     it('should return an error if it fails');
//     // Test successful request
//     it('should return an error of null');
//   });
//
// });
