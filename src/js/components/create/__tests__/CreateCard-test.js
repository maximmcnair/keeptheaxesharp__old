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

  beforeEach(() => {
    CreateCard = require('../CreateCard');
    CreateCard.__Rewire__('CardService', mockCardService);
  });

  it('if an id is defined in props then `state.edit` should be true', () => {
    var _id = 'asd1';
    const el = TestUtils.renderIntoDocument(<CreateCard id={_id}/>);
    // Expect `state.edit` to be true
    expect(el.state.edit).toBeTruthy();
  });

  it('if an edit is defined in props, it should get data for that card and populate view', () => {
    let CardFixture =
      { front: 'front'
      , back: 'back'
      , tags: ['node', 'react']
    };
    mockCardService.getOne.yields(null, CardFixture);
    var _id = 'asd1';
    const el = TestUtils.renderIntoDocument(<CreateCard id={_id}/>);
    // Expect getOne service to be called
    expect(mockCardService.getOne.called).toBeTruthy();
    // Expect state.front to be correct
    expect(el.state.front).toEqual(CardFixture.front);
    // Expect state.back to be correct
    expect(el.state.back).toEqual(CardFixture.back);
    // Expect state.tags to be correct
    expect(el.state.tags).toEqual(CardFixture.tags);
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
  it('Adding content to codemirror component for front should update `.state.front`');
  it('Adding content to codemirror component for back should update `.state.back`');

  it('should create card with correct content', () => {
    const el = TestUtils.renderIntoDocument(<CreateCard />);
    // Set state
    el.setState({
      front: 'Front of card'
    , back: 'Back of card'
    , tags: ['javascript', 'go']
    });
    // Simulate use clicking create btn
    var flipCardBackBtn = TestUtils.findRenderedDOMComponentWithClass(el, 'card-action-save');
    TestUtils.Simulate.click(flipCardBackBtn);
    // Expect Card service to be called with correct content
    expect(mockCardService.create.getCall(0).args[0].front).toEqual('Front of card')
    expect(mockCardService.create.getCall(0).args[0].back).toEqual('Back of card')
    expect(mockCardService.create.getCall(0).args[0].tags).toEqual(['javascript', 'go'])
  });

  // TODO - Add tests for tags updating state
});
