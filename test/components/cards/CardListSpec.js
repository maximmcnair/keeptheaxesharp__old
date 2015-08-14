/**
 * Card List Spec
 */

'use strict';

import {expect} from 'chai';
import jsdom from 'jsdom';
import cheerio from 'cheerio';

import CardListComponent from './../../../src/js/components/cards/CardList.js';

var React, TestUtils;

/**
 * @test {CardListComponent}
 */
describe('CardList Component', () => {
  it('Get cards form CardService', function(){
    // expect CardService to be called
    // expect state to be set
    // expect cards to be rendered
  });

  it('should have a button for creating a card', function(){
    // expect button to have `Create Card`
    // expect button to link to url `/create`
  });

});
