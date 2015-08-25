/**
 * Card Preview Spec
 */
let cardFixture =
  { front: '# Front of card'
  , back: '## Back of card'
  }

/**
* @test {CardPreview}
*/
describe('CardPreview Component', () => {
  var CardPreview;
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  beforeEach(() => {
    CardPreview = require('../CardPreview.js');
  });

  it('Expect component to render `.front` with markdown', () => {
    var renderedCard = TestUtils.renderIntoDocument(
      <CardPreview card={cardFixture}/>, document.body
    );
    var cardHTML = React.findDOMNode(renderedCard).innerHTML;
    // Expect card to contain card fixture `.front`
    expect(cardHTML).toContain('<h1>Front of card</h1>');
  });

  it('Expect back to not be visible initially', () => {
    var renderedCard = TestUtils.renderIntoDocument(
      <CardPreview card={cardFixture}/>, document.body
    );
    var cardHTML = React.findDOMNode(renderedCard).innerHTML;
    // Expect card's state.showAnswer to equal `false`
    expect(renderedCard.state.showAnswer).toBeFalsy;
    // Expect card fixture `.back` to not be rendered
    expect(cardHTML).not.toContain('<h2>Back of card</h2>')
  });

  it('Expect back to be visible after user clicks `show answer`', () => {
    var renderedCard = TestUtils.renderIntoDocument(
      <CardPreview card={cardFixture}/>, document.body
    );
    var cardHTML = React.findDOMNode(renderedCard).innerHTML;
    // Expect there to be a show answer button
    expect(cardHTML).toContain('Show Answer')
    // Simulate user click
    var showAnswerBtn = TestUtils.findRenderedDOMComponentWithClass(renderedCard, 'cardPreview-showAnswer');
    TestUtils.Simulate.click(showAnswerBtn);
    // Expect card fixture `.back` to be rendered
    var cardHTML = React.findDOMNode(renderedCard).innerHTML;
    expect(cardHTML).toContain('<h2>Back of card</h2>');
  });

  it('Should add tags for card', function(){
    let cardFixture =
      { front: '# Front of card'
      , back: '## Back of card'
      , tags: ['react', 'angular']
      }
    var renderedCard = TestUtils.renderIntoDocument(
      <CardPreview card={cardFixture}/>, document.body
    );
    // Expect there to be 2 tags rendered
    var tags = TestUtils.scryRenderedDOMComponentsWithClass(renderedCard, 'tag');
    expect(tags.length).toEqual(2);
  });

  it('should have a link to edit card', () => {
    let cardFixture =
      { front: '# Front of card'
      , back: '## Back of card'
      , tags: ['react', 'angular']
      , _id: '132ads4532'
      }
    var renderedCard = TestUtils.renderIntoDocument(
      <CardPreview card={cardFixture}/>, document.body
    );
    // Expect there to be a link to correct edit url
    var cardHTML = React.findDOMNode(renderedCard).innerHTML;
    expect(cardHTML).toContain('/edit/' + cardFixture._id);
  });

});
