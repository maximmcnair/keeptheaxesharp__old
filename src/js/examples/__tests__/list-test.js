var rewire = require('rewire')
var mockCardService =
  { getAll: function (query, cb) {
      cb(null, ['one', 'two']);
    }
  };

describe('CardList', () => {
  var CardList;
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  beforeEach(() => {
    CardList = rewire('../CardList.js')
    CardList.__set__('CardService', mockCardService);
  });

  it('can add a member', () => {
    const el = TestUtils.renderIntoDocument(<CardList />);
    // Using `TestUtils.renderIntoDocument` will automatically call
    // `.componentDidMount`, so lets restart the state
    el.setState({
      cards: []
    })
    // Simulate component mounting
    el.componentDidMount();
    // Expect state to contain cards
    // expect(el.state.cards).to.be.instanceof(Array)
    expect(el.state.cards.length).toEqual(2)
  });

});
