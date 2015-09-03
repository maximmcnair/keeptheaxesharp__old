'use strict';

import React from 'react';

/**
 * ScoreComponent View
 * @extends {React.Component}
 */
class ScoreComponent extends React.Component {
  /**
  * @returns {XML}
  */
  render() {
    return (
      <div className="cardScore">
        <div className="cardScore-Correct">
          <div className="cardScore-iconContainer">
            <i className="fa fa-check cardScore-iconContainer__icon"></i>
            <span className="cardScore-iconContainer__amount cardScore-Correct-iconContainer__amount">{this.props.correct}</span>
          </div>
          <span className="cardScore-type">correct</span>
        </div>
        <div className="cardScore-Wrong">
          <div className="cardScore-iconContainer">
            <i className="fa fa-times cardScore-iconContainer__icon"></i>
            <span className="cardScore-iconContainer__amount cardScore-Wrong-iconContainer__amount">{this.props.wrong}</span>
          </div>
          <span className="cardScore-type">wrong</span>
        </div>
      </div>
    );
  }
}

ScoreComponent.propTypes = {
  correct: React.PropTypes.number
, wrong: React.PropTypes.number
};

export default ScoreComponent;
