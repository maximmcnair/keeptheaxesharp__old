'use strict';

import React from 'react';


/**
 * Card View
 * @extends {React.Component}
 */
export default class Card extends React.Component {
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
    // Render correct class
    var cardClass = 'card'
      , index = this.props.cardIndex - this.props.currentCard;

    switch(true){
      case (index < 0):
        cardClass = 'card card-done';
        break;
      case (index === 0):
        cardClass = 'card card-current';
        break;
      case (index === 1):
        cardClass = 'card card-second';
        break;
      case (index === 2):
        cardClass = 'card card-third';
        break;
      case (index === 3):
        cardClass = 'card card-fourth';
        break;
      case (index > 3):
        cardClass = 'card';
        break;
    }

    return (
      <div className={cardClass}>
        <div className="card-front" onClick={this.flipCard}>
          <div className="card-content-wrapper">
            <div className="card-content"></div>
          </div>
          <div className="u-textCenter card-btn-wrapper">
            <small className="question-showAnswer card-flip">
              <i className="fa fa-refresh"></i>
              flip card to see answer
            </small>
          </div>
        </div>
      </div>
    );
  }
}
