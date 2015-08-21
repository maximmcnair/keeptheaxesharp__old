/**
 * Tags View Spec
 */
var mockCardService =
  { getTags: function (cb) {
     cb(null, ['mock-tag-one', 'mock-tag-two']);
    }
  };

/**
 * @test {TagsViewComponent}
 */
describe('TagsViewComponent', () => {
  var TagsComponent;
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  beforeEach(() => {
    TagsComponent = require('../TagsView.js');
    TagsComponent.__Rewire__('CardService', mockCardService);
  });

  it('should get tags from CardService and rendered them into view', () => {
    const el = TestUtils.renderIntoDocument(<TagsComponent />);
    // Using `TestUtils.renderIntoDocument` will automatically call
    // `.componentDidMount`, so lets restart the state
    el.setState({
      tags: []
    });
    // Simulate component mounting
    el.componentDidMount();
    // Expect state to contain cards
    expect(el.state.tags.length).toEqual(2);
    // Expect two cards to be rendered
    expect( React.findDOMNode(el).innerHTML ).toContain('mock-tag-one');
    expect( React.findDOMNode(el).innerHTML ).toContain('mock-tag-two');
  });

  it('should have title', () => {
    const el = TestUtils.renderIntoDocument(<TagsComponent />);
    // Expect title to be rendered
    expect( React.findDOMNode(el).innerHTML ).toContain('Pick tags to review');
  });

});
