'use strict';

import React from 'react';

/* eslint-disable no-unused-vars */
import ReviewTags from './tags-component.js';
/* eslint-enable no-unused-vars */

/**
 * Review View
 * @extends {React.Component}
 */
export default class Review extends React.Component {
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
        <ReviewTags></ReviewTags>
      </div>
    );
  }

}
