'use strict';

import React from 'react';

import ReviewTags from './tags-component.js';

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
      <div className="review">
        <ReviewTags></ReviewTags>
      </div>
    );
  }

}
