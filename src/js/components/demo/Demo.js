'use strict';

import React from 'react';
import CardsFixture from '../../fixtures/cards.js'
import ReviewView from '../review/ReviewView.js';

/**
 * BlankComponent
 * @extends {React.Component}
 */
export default class Demo extends React.Component {
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
        <section className="landing">
          <div className="landing-intro">
            <div className="landing-logo">
              <span className="landing-logo-text">Keep The Axe Sharp</span>
            </div>
            <a href="/auth/github" className="btn landing-auth">Login with Github to start Creating Cards</a>
            <small className="landing-cards-small">It&#39;s free</small>
          </div>
        </section>
        <ReviewView cards={CardsFixture}></ReviewView>
      </div>
    );
  }

}
