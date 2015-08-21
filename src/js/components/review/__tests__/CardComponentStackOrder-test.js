/**
 * Card Component Stack Order Spec
 */

/**
 * @test {CardComponentComponent Stack Order}
 */
describe('CardComponentComponent Stack Order', () => {
  var CardComponent;
  var CardFixture =
    { front: '# front of card'
    , back: '## back of card'
    , answered: false
    }
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  beforeEach(() => {
    CardComponent = require('../CardComponent.js');
  });

  it('card\s index is below 0 it should have class `card-done`', function(){
    var indexToTest = 0
      , currentCard = 1

    // Render a Card in the document
    var card = TestUtils.renderIntoDocument(
      <CardComponent card={CardFixture} cardIndex={indexToTest} currentCard={currentCard}/>
    )

    // Get card node
    var cardFrontText = TestUtils.findRenderedDOMComponentWithClass(card, 'card')
    expect(cardFrontText.getDOMNode().className).toContain('card-done')
  })

  it('card\s index is 1 it should have class `card-current`', function(){
    var indexToTest = 1
      , currentCard = 1

    // Render a Card in the document
    var card = TestUtils.renderIntoDocument(
      <CardComponent card={CardFixture} cardIndex={indexToTest} currentCard={currentCard}/>
    )

    // Get card node
    var cardFrontText = TestUtils.findRenderedDOMComponentWithClass(card, 'card')
    expect(cardFrontText.getDOMNode().className).toContain('card-current')
  })

  it('card\s index is 2 it should have class `card-second', function(){
    var indexToTest = 2
      , currentCard = 1

    // Render a Card in the document
    var card = TestUtils.renderIntoDocument(
      <CardComponent card={CardFixture} cardIndex={indexToTest} currentCard={currentCard}/>
    )

    // Get card node
    var cardFrontText = TestUtils.findRenderedDOMComponentWithClass(card, 'card')
    expect(cardFrontText.getDOMNode().className).toContain('card-second')
  })

  it('card\s index is 3 it should have class `card-third', function(){
    var indexToTest = 3
      , currentCard = 1

    // Render a Card in the document
    var card = TestUtils.renderIntoDocument(
      <CardComponent card={CardFixture} cardIndex={indexToTest} currentCard={currentCard}/>
    )

    // Get card node
    var cardFrontText = TestUtils.findRenderedDOMComponentWithClass(card, 'card')
    expect(cardFrontText.getDOMNode().className).toContain('card-third')
  })

  it('card\s index is 4 it should have class `card-fourth', function(){
    var indexToTest = 4
      , currentCard = 1

    // Render a Card in the document
    var card = TestUtils.renderIntoDocument(
      <CardComponent card={CardFixture} cardIndex={indexToTest} currentCard={currentCard}/>
    )

    // Get card node
    var cardFrontText = TestUtils.findRenderedDOMComponentWithClass(card, 'card')
    expect(cardFrontText.getDOMNode().className).toContain('card-fourth')
  })

  it('card\s index is 5 it should have class `card', function(){
    var indexToTest = 5
      , currentCard = 1

    // Render a Card in the document
    var card = TestUtils.renderIntoDocument(
      <CardComponent card={CardFixture} cardIndex={indexToTest} currentCard={currentCard}/>
    )

    // Get card node
    var cardFrontText = TestUtils.findRenderedDOMComponentWithClass(card, 'card')
    expect(cardFrontText.getDOMNode().className).toContain('card')
    expect(cardFrontText.getDOMNode().className).not.toContain('card-done')
    expect(cardFrontText.getDOMNode().className).not.toContain('card-current')
    expect(cardFrontText.getDOMNode().className).not.toContain('card-second')
  })

});
