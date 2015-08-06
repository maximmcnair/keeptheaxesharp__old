'use strict';

import React from 'react';

/**
 * Review Tags Component
 * @extends {React.Component}
 */
export default class ReviewTags extends React.Component {
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
        <h2>Review Tags</h2>
        <section>
          <span>Go</span>
          <span>Javscript</span>
          <span>Node.js</span>
          <span>Angular</span>
          <span>React</span>
          <span>ES2015</span>
        </section>
       </div>
     );
   }

}
