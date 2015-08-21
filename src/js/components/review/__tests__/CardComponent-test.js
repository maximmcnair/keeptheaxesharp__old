/**
 * Card Component Spec
 */

/**
 * @test {CardComponentComponent}
 */
describe('CardComponentComponent', () => {
  var CardComponent;
  var CardFixture =
    { front: '# front of card'
    , back: '## back of card'
    , answered: false
    }
  var CardAnsweredFixture =
    { front: '# front of card'
    , back: '## back of card'
    , answered: true
    }
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  beforeEach(() => {
    CardComponent = require('../CardComponent.js');
  });

  it('should show front of card', () => {
    const el = TestUtils.renderIntoDocument(<CardComponent card={CardFixture}/>);
    // front should be rendered as html
    expect( React.findDOMNode(el).innerHTML ).toContain('<h1>front of card</h1>');
  });

  it('should show back of card', () => {
    const el = TestUtils.renderIntoDocument(<CardComponent card={CardFixture}/>);
    // back should be rendered as html
    expect( React.findDOMNode(el).innerHTML ).toContain('<h2>back of card</h2>');
  });

  it('should call `.props.flipCard` when front of card is clicked', () => {
    // Setup spy for flipCard
    var spyFlipCard = sinon.spy();
    // Render into doc
    const el = TestUtils.renderIntoDocument(<CardComponent card={CardFixture} flipCard={spyFlipCard} />);
    // Simulate user click
    var cardFront = TestUtils.findRenderedDOMComponentWithClass(el, 'card-front');
    TestUtils.Simulate.click(cardFront);
    // Check `props.flipCard` is called
    expect( spyFlipCard.callCount ).toEqual(1);
  });

  it('should call `.props.flipCard` when `flipCard` button is clicked on back', () => {
    // Setup spy for flipCard
    var spyFlipCard = sinon.spy();
    // Render into doc
    const el = TestUtils.renderIntoDocument(<CardComponent card={CardFixture} flipCard={spyFlipCard} />);
    // Simulate user click
    var cardFront = TestUtils.findRenderedDOMComponentWithClass(el, 'card-flip--back');
    TestUtils.Simulate.click(cardFront);
    // Check `props.flipCard` is called
    expect( spyFlipCard.callCount ).toEqual(1);
  });

  it('should show front if `.props.card.answered` is false', () => {
    // Render into doc
    const el = TestUtils.renderIntoDocument(<CardComponent card={CardFixture} />);
    // Expect `.card` to have not class `.is--answered`
    var cardElem = TestUtils.findRenderedDOMComponentWithClass(el, 'card');
    expect( React.findDOMNode(cardElem).className ).not.toContain('is--answered');
  });

  it('should show back if `.props.card.answered` is true', () => {
    // Render into doc
    const el = TestUtils.renderIntoDocument(<CardComponent card={CardAnsweredFixture} />);
    // Expect `.card` to have class `.is--answered`
    var cardElem = TestUtils.findRenderedDOMComponentWithClass(el, 'card');
    expect( React.findDOMNode(cardElem).className ).toContain('is--answered');
  });

  it('should allow user to mark card correct', () => {
    // Setup spy for markCardCorrect
    var spyMarkCardCorrect = sinon.spy();
    // Expect there to be a button
    const el = TestUtils.renderIntoDocument(<CardComponent card={CardAnsweredFixture} markCardCorrect={spyMarkCardCorrect}/>);
    // Simulate user clicking button
    var cardActionCorrect = TestUtils.findRenderedDOMComponentWithClass(el, 'card-action-right');
    TestUtils.Simulate.click(cardActionCorrect);
    // Expect `props.markCardCorrect` with true
    expect(spyMarkCardCorrect.callCount).toEqual(1);
    expect(spyMarkCardCorrect.calledWith(true)).toEqual(true);
  });

  it('should allow user to mark card wrong', () => {
    // Setup spy for markCardCorrect
    var spyMarkCardCorrect = sinon.spy();
    // Expect there to be a button
    const el = TestUtils.renderIntoDocument(<CardComponent card={CardAnsweredFixture} markCardCorrect={spyMarkCardCorrect}/>);
    // Simulate user clicking button
    var cardActionCorrect = TestUtils.findRenderedDOMComponentWithClass(el, 'card-action-wrong');
    TestUtils.Simulate.click(cardActionCorrect);
    // Expect `props.markCardCorrect` with true
    expect(spyMarkCardCorrect.callCount).toEqual(1);
    expect(spyMarkCardCorrect.calledWith(false)).toEqual(true);
  });

  it('should show correct className when card is answered correct', () => {
    var CardAnsweredCorrect =
      { front: '# front of card'
      , back: '## back of card'
      , answered: true
      , answeredCorrect: true
      }
    // Expect there to be a button
    const el = TestUtils.renderIntoDocument(<CardComponent card={CardAnsweredCorrect}/>);
    // Get `.card-action` elem
    var cardAction = TestUtils.findRenderedDOMComponentWithClass(el, 'card-action');
    // Expect it to have `is-correct` class
    expect( React.findDOMNode(cardAction).className ).toContain('is-correct');
  });

  it('should show correct className when card is answered wrong', () => {
    var CardAnsweredCorrect =
      { front: '# front of card'
      , back: '## back of card'
      , answered: true
      , answeredCorrect: false
      }
    // Expect there to be a button
    const el = TestUtils.renderIntoDocument(<CardComponent card={CardAnsweredCorrect}/>);
    // Get `.card-action` elem
    var cardAction = TestUtils.findRenderedDOMComponentWithClass(el, 'card-action');
    // Expect it to have `is-wrong` class
    expect( React.findDOMNode(cardAction).className ).toContain('is-wrong');
  });

});
