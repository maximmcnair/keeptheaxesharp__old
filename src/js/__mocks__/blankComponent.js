'use strict';

import React from 'react';

/**
 * BlankComponent
 * @extends {React.Component}
 */
export default class BlankComponent extends React.Component {
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
      <div>{this.props}</div>
    );
  }

}
