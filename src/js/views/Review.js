'use strict';

import React from 'react';

/* eslint-disable no-unused-vars */
import ReviewTags from '../components/review-tags.js';
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
         <h1>Review</h1>
         <ReviewTags></ReviewTags>
      </div>
     );
   }

}
