/**
 * Landing View Spec
 */

/**
 * @test {LandingViewComponent}
 */
describe('LandingView Component', () => {
  var LandingViewComponent;
  var React = require('react');
  var TestUtils = require('react/lib/ReactTestUtils');

  beforeEach(function () {
    LandingViewComponent  = require('./../LandingView.js');
  });

  it('Expect it link to auth', () => {
    var renderedLanding = TestUtils.renderIntoDocument(
      <LandingViewComponent/>, document.body
    );
    var landingHTML = React.findDOMNode(renderedLanding).innerHTML;
    // Expect landing to contain link to  `/auth/github`
    expect(landingHTML).toContain('/auth/github');
  });

});
