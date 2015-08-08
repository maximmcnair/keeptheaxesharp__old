'use strict';

import React from 'react';

// import CardService from './../../services/CardService.js';

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
   * @desc assigns a baobab listener after component has been mounted
   */
  componentDidMount () {
    console.log('review', this.props.tags.split('&') );
  }

  /**
  * @returns {XML}
  */
  render() {
    return (
      <div className="review">
      </div>
    );
  }

}
