/**
 * TagsView Spec
 */

'use strict';

import {expect} from 'chai';
import jsdom from 'jsdom';
import cheerio from 'cheerio';

import TagsViewComponent from './../../../src/js/components/tags/TagsView.js';

var React, TestUtils;

/**
 * @test {TagsViewComponent}
 */
describe('TagsView Component', () => {
  before(function () {
    // init jsdom
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.parentWindow;

    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
  });


});
