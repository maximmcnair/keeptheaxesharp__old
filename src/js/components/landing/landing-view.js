'use strict';

import React from 'react';

/**
 * Landing View
 * @extends {React.Component}
 */
export default class Landing extends React.Component {
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
    // due to flash of unstyled content the html for the example cards has
    // been copied from a render CodeMirror component
    return (
      <section className="landing">
        <div className="landing-intro">
          <div className="landing-logo">
            <span className="landing-logo-text">Keep Your Axe Sharp</span>
          </div>
          <h2 className="landing-title">Ever find yourself on the same Stack Overflow answer time and time again?</h2>
          <p className="landing-desc">Keep Your Axe Sharp uses flashcards and a repetition spaced learning algorithm to help programmers commit easy forgotten patterns, edge cases and shortcuts to memory.</p>
          <p className="landing-desc">We support over 50 language syntaxes for our cards, including Ruby, C, C#, Go, Javascript, CoffeeScript, PHP, Java, Python.</p>
          <a href="/#/review" className="btn btn-icon landing-auth"><i className="fa fa-github"></i> Login with Github</a>
          <small className="landing-cards-small">It&#39;s free</small>
        </div>
        <div className="landing-cards-overlay"></div>
        <section className="landing-cards">
          <div className="card-container">

            <div className="card card-current">
              <div className="card-front">
                <div className="card-front-content">
                </div>
              </div>
            </div>

            <div className="card card-second">
              <div className="card-front">
                <div className="card-front-content">
                </div>
              </div>
            </div>

            <div className="card card-third">
              <div className="card-front">
                <div className="card-front-content">
                </div>
              </div>
            </div>

          </div>
        </section>
      </section>
    );
  }

}
