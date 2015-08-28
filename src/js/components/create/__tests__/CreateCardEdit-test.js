/**
 * Create Card Editing Component Spec
 */
var mockCardService =
  { create: sinon.stub()
  , update: sinon.stub()
  , getOne: sinon.stub()
  };

/**
 * @test {CreateCardEditingComponent}
 */
describe('CreateCardEditingComponent', () => {
  var CreateCard;
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');
  let _id = '12aw34'
  let CardFixture =
    { front: 'front'
    , back: 'back'
    , tags: ['node', 'react']
    };

  beforeEach(() => {
    CreateCard = require('../CreateCard');
    CreateCard.__Rewire__('CardService', mockCardService);
  });

  it('if an id is defined in props then `state.edit` should be true', () => {
    const el = TestUtils.renderIntoDocument(<CreateCard id={_id}/>);
    // Expect `state.edit` to be true
    expect(el.state.edit).toBeTruthy();
  });

  it('if an id is defined in props, it should get data for that card and populate view', () => {
    mockCardService.getOne.yields(null, CardFixture);
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

  it('if an id is defined in props, should have a `Save Changes` button', () => {
    mockCardService.getOne.yields(null, CardFixture);
    const el = TestUtils.renderIntoDocument(<CreateCard id={_id}/>);
    // Expect flipCardBackBtn to have correct content
    var flipCardBackBtn = TestUtils.findRenderedDOMComponentWithClass(el, 'card-action-save');
    expect(flipCardBackBtn.getDOMNode().innerHTML).toContain('Save Changes');
  });

  it('if an id is defined in props, should use CardService.edit', () => {
    const el = TestUtils.renderIntoDocument(<CreateCard id={_id}/>);
    // Set state
    el.setState({
      front: 'Front of card'
    , back: 'Back of card'
    , tags: ['javascript', 'go']
    });
    var flipCardBackBtn = TestUtils.findRenderedDOMComponentWithClass(el, 'card-action-save');
    // Simulate use clicking create btn
    TestUtils.Simulate.click(flipCardBackBtn);
    // Expect Card service to be called with correct content
    expect(mockCardService.update.getCall(0).args[0]).toEqual(_id)
    expect(mockCardService.update.getCall(0).args[1].front).toEqual('Front of card')
    expect(mockCardService.update.getCall(0).args[1].back).toEqual('Back of card')
    expect(mockCardService.update.getCall(0).args[1].tags).toEqual(['javascript', 'go'])
  });

});
