/**
 * Create Card Component Spec
 */
var mockCardService =
  { create: sinon.stub()
  , getOne: sinon.stub()
  };

/**
 * @test {CreateCardComponent}
 */
describe('CreateCardComponent', () => {
  var CreateCard;
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');
  let CardFixture =
    { front: 'front'
    , back: 'back'
    , tags: ['node', 'react']
    };

  beforeEach(() => {
    CreateCard = require('../CreateCard');
    CreateCard.__Rewire__('CardService', mockCardService);
  });

  it('should initially show front of card and allow user to flip card to back and then to front', () => {
    const el = TestUtils.renderIntoDocument(<CreateCard />);
    // Expect `state.answered` to be false
    expect( el.state.answered ).toEqual(false);
    // Expect `.card` to not have `.is--answered` class
    var cardElem = TestUtils.findRenderedDOMComponentWithClass(el, 'card');
    expect( React.findDOMNode(cardElem).className ).not.toContain('is--answered');

    // Simulate user clicking `flip card`
    var flipCardBtn = TestUtils.findRenderedDOMComponentWithClass(el, 'question-showAnswer');
    TestUtils.Simulate.click(flipCardBtn);
    // Expect errors to be shown
    expect( React.findDOMNode(cardElem).innerHTML ).toContain('Content for front of card is required');
    expect( React.findDOMNode(cardElem).innerHTML ).toContain('You must add at least one tag');

    // Add correct data
    el.setState({front: 'front', tags: ['javascript']})
    // Simulate user clicking `flip card`
    TestUtils.Simulate.click(flipCardBtn);
    // Expect `state.answered` to be true
    expect( el.state.answered ).toEqual(true);
    // Expect `.card` to have `.is-answered` class
    expect( React.findDOMNode(cardElem).className ).toContain('is--answered');
    // Simulate user clicking `card-flip--back`
    var flipCardBackBtn = TestUtils.findRenderedDOMComponentWithClass(el, 'card-flip--back');
    TestUtils.Simulate.click(flipCardBackBtn);
    // Expect `state.answered` to be true
    expect( el.state.answered ).toEqual(false);
    // Expect `.card` to have `.is-answered` class
    expect( React.findDOMNode(cardElem).className ).not.toContain('is--answered');
  });

  // TODO - Add tests for codemirror updating state
  // it('Adding content to codemirror component for front should update `.state.front`');
  // it('Adding content to codemirror component for back should update `.state.back`');

  it('should create card with correct content', () => {
    const el = TestUtils.renderIntoDocument(<CreateCard />);
    // Set state
    el.setState({
      front: 'Front of card'
    , tags: ['javascript', 'go']
    });
    var flipCardBackBtn = TestUtils.findRenderedDOMComponentWithClass(el, 'card-action-save');
    // Expect flipCardBackBtn to have correct content
    expect(flipCardBackBtn.getDOMNode().innerHTML).toContain('Create Card');
    // Simulate use clicking create btn
    TestUtils.Simulate.click(flipCardBackBtn);
    // Expect errors to be shown
    expect( React.findDOMNode(el).innerHTML ).toContain('Content for back of card is required');
    // Add correct data
    el.setState({back: 'Back of card'});
    // Simulate use clicking create btn
    TestUtils.Simulate.click(flipCardBackBtn);
    // Expect Card service to be called with correct content
    expect(mockCardService.create.getCall(0).args[0].front).toEqual('Front of card');
    expect(mockCardService.create.getCall(0).args[0].back).toEqual('Back of card');
    expect(mockCardService.create.getCall(0).args[0].tags).toEqual(['javascript', 'go']);
  });

  // TODO - Add tests for tags updating state
});
