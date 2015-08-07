/**
 * Basket Component Spec
 */

'use strict';

import {expect} from 'chai';
import React from 'react/addons';
import jsdom from 'jsdom';
import cheerio from 'cheerio';

import ReviewViewComponent from './../../src/js/components/review/review-view.js';

// init jsdom
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;

const TestUtils = React.addons.TestUtils;

/**
 * @test {ReviewViewComponent}
 */
describe('ReviewView Component', () => {

  before(function () {
    let renderedComponent = TestUtils.renderIntoDocument(<ReviewViewComponent />, document.body);
    let inputComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'review'
    );

    global.element = inputComponent.getDOMNode();
    global.$ = cheerio.load(String(global.element.outerHTML));
  });

  it('Expect to have the given basket review', () => {
    expect(global.element.getAttribute('class')).to.equal('review');
  });

});
