'use strict';

import React from 'react';
import Create from '../create/CreateCard.js';

/**
 * Onboarding View
 * @extends {React.Component}
 */
class Onboarding extends React.Component {
  /**
   * @desc sets initial state
   */
  constructor () {
    super();
  }

  /**
   * @returns {XML}
   */
  render() {
    return (
      <div>
        <div className="u-textCenter">
          <h2>Hey there {this.props.user.name}.<br/>Let’s get you started by adding your first card.</h2>
          <p>Start by typing a question on the front of the card on the right.</p>
          <p>Can’t think of a question you try the trusted ‘Hello World’ exercise.<br/>E.g. How would you log the string ‘Hello world’?</p>
        </div>
        <Create></Create>
      </div>
    );
  }

}

Onboarding.propTypes = {
  user: React.PropTypes.object
};

export default Onboarding;
