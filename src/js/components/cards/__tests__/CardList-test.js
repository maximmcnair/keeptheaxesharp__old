/**
 * Card List Spec
 */
var mockCardService =
  { getAll: function (query, cb) {
      cb(null, [
        { _id: '1', front: 'mock-content-one'}
      , { _id: '2', front: 'mock-content-two'}
      ]);
    }
  };
import blankComponent from './../../../__mocks__/blankComponent';

/**
 * @test {CardListComponent}
 */
describe('CardListComponent', () => {
  var CardList;
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  beforeEach(() => {
    CardList = require('../CardList.js');
    CardList.__Rewire__('CardService', mockCardService);
    CardList.__Rewire__('CardPreview', blankComponent);
  });

  it('should get cards form CardService', () => {
    const el = TestUtils.renderIntoDocument(<CardList/>);
    // Using `TestUtils.renderIntoDocument` will automatically call
    // `.componentDidMount`, so lets restart the state
    el.setState({
      cards: []
    });
    // Simulate component mounting
    el.componentDidMount();
    // Expect state to contain cards
    expect(el.state.cards.length).toEqual(2);
    // Expect two cards to be rendered
    expect( React.findDOMNode(el).innerHTML ).toContain('mock-content-one');
    expect( React.findDOMNode(el).innerHTML ).toContain('mock-content-two');
  });

  // it('should have a button for creating a card', () => {
  //   const el = TestUtils.renderIntoDocument(<CardList/>);
  //   var createBtn = TestUtils.findRenderedDOMComponentWithClass(el, 'cardPreviewList-create');
  //   // expect button to have text of `Create Card`
  //   expect( createBtn.getDOMNode().textContent ).toEqual('Create Card');
  //   // expect button to link to url `/create`
  //   expect( createBtn.getDOMNode().getAttributeNode('href').value ).toEqual('/create');
  // });
  //
  // it('should contain a title for the page', () => {
  //   const el = TestUtils.renderIntoDocument(<CardList/>);
  //   var titleEl = TestUtils.findRenderedDOMComponentWithClass(el, 'cardPreviewList-title');
  //   // expect title to have text of `Cards`
  //   expect( titleEl.getDOMNode().textContent ).toEqual('Cards');
  //   // expect title to be an `h2`
  //   expect( titleEl.getDOMNode().tagName ).toEqual('H2');
  // });

});
