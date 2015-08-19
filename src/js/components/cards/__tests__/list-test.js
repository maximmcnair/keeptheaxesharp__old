var mockCardService =
  { getAll: function (query123, cb) {
      console.log('mocked')
      cb(null, ['one', 'two']);
    }
  };

describe('CardList', () => {
  var CardList;
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  beforeEach(() => {
    CardList = require('../CardList.js')
    // console.log( CardList.__Rewire__('CardService') );
    CardList.__Rewire__('CardService', mockCardService);
    // console.log( CardList.__get__('CardService').getAll );
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
    expect(el.state.cards.length).toEqual(2)
  });

});
