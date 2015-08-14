/**
 * Basket Component Spec
 */

'use strict';

import {expect} from 'chai';
import jsdom from 'jsdom';
import cheerio from 'cheerio';

import CardPreviewComponent from './../../../src/js/components/cards/CardPreview.js';

var React, TestUtils;

/**
 * @test {CardPreviewComponent}
 */
describe('CardPreview Component', () => {
  let cardFixture =
    { front: '# Front of card'
    , back: '## Back of card'
    }

  before(function () {
    // remove react from the require cache
    for (var key in require.cache) {
      if (key.match(/\/node_modules\/react\//)) {
        delete require.cache[key];
      }
    }

    // init jsdom
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.parentWindow;

    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
  });

  it('Expect component to render `.front` with markdown', () => {
    var renderedCard = TestUtils.renderIntoDocument(
      <CardPreviewComponent card={cardFixture}/>, document.body
    );
    var cardHTML = React.findDOMNode(renderedCard).innerHTML;
    // Expect card to contain card fixture `.front`
    expect(cardHTML).to.contain('<h1>Front of card</h1>');
  });

  it('Expect back to not be visible initially', () => {
    var renderedCard = TestUtils.renderIntoDocument(
      <CardPreviewComponent card={cardFixture}/>, document.body
    );
    var cardHTML = React.findDOMNode(renderedCard).innerHTML;
    // Expect card's state.showAnswer to equal `false`
    expect(renderedCard.state.showAnswer).to.be.false;
    // Expect card fixture `.back` to not be rendered
    expect(cardHTML).to.not.contain('<h2>Back of card</h2>')
  });

  it('Expect back to be visible after user clicks `show answer`', () => {
    var renderedCard = TestUtils.renderIntoDocument(
      <CardPreviewComponent card={cardFixture}/>, document.body
    );
    var cardHTML = React.findDOMNode(renderedCard).innerHTML;
    // Expect there to be a show answer button
    expect(cardHTML).to.contain('Show Answer')
    // Simulate user click
    var showAnswerBtn = TestUtils.findRenderedDOMComponentWithClass(renderedCard, 'cardPreview-showAnswer');
    TestUtils.Simulate.click(showAnswerBtn);
    // Expect card fixture `.back` to be rendered
    var cardHTML = React.findDOMNode(renderedCard).innerHTML;
    expect(cardHTML).to.contain('<h2>Back of card</h2>');
  });

  it('Should add tags for card', function(){
    let cardFixture =
      { front: '# Front of card'
      , back: '## Back of card'
      , tags: ['react', 'angular']
      }
    var renderedCard = TestUtils.renderIntoDocument(
      <CardPreviewComponent card={cardFixture}/>, document.body
    );
    // Expect there to be 2 tags rendered
    var tags = TestUtils.scryRenderedDOMComponentsWithClass(renderedCard, 'tag');
    expect(tags.length).to.equal(2);
  });

});
