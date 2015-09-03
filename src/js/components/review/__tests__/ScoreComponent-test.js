/**
 * Score Component Spec
 */

/**
 * @test {ScoreComponentComponent}
 */
describe('ScoreComponentComponent', () => {
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  var ScoreComponent;

  beforeEach(() => {
    ScoreComponent = require('../ScoreComponent.js');
  });

  it('should display the correct scores', () => {
    // const el = TestUtils.renderIntoDocument(<ScoreComponent correct={1} wrong={2}/>);
    // back should be rendered as html
    // expect( React.findDOMNode(el).innerHTML ).toContain('');
  });

});
