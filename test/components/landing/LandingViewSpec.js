/**
 * Landing View Spec
 */

'use strict';

import {expect} from 'chai';
import jsdom from 'jsdom';
import cheerio from 'cheerio';

import LandingViewComponent from './../../../src/js/components/landing/LandingView.js';

var React, TestUtils;

/**
 * @test {LandingViewComponent}
 */
describe('LandingView Component', () => {
  before(function () {
    // init jsdom
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.parentWindow;

    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
  });

  it('Expect it link to auth', () => {
    var renderedLanding = TestUtils.renderIntoDocument(
      <LandingViewComponent/>, document.body
    );
    var landingHTML = React.findDOMNode(renderedLanding).innerHTML;
    // Expect landing to contain link to  `/auth/github`
    expect(landingHTML).to.contain('/auth/github');
  });

});
