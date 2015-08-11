/**
 * Card Service Spec
 */

'use strict';

import {expect} from 'chai';

describe('Card Service Spec', function(){

  /**
   * @test CardService.getAll()
   */
  describe('CardService.getAll() test', function(){
    it('should return error if it fails');
    // Test successful request
    it('should return array of cards');
    it('should return an error of null');
  });

  /**
   * @test CardService.create()
   */
  describe('CardService.create()', function(){
    it('should return an error if it fails');
    // Test successful request
    it('should return newly create card with an _id');
    it('should return an error of null');
  });

  /**
   * @test CardService.update()
   */
  describe('CardService.update()', function(){
    it('should return an error if it fails');
    // Test successful request
    it('should return card object');
    it('should return an error of null');
  });

  /**
   * @test CardService.delete()
   */
  describe('CardService.delete()', function(){
    it('should return an error if it fails');
    // Test successful request
    it('should return an error of null');
  });

});
