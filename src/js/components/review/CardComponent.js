/* eslint-disable react/no-danger */
'use strict';

import React from 'react';

// Markdown Dependencies
var hljs = require('highlight.js');
var emoji = require('markdown-it-emoji');
var md = require('markdown-it')({
  typographer: true
, highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {
        console.log('');
      }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {
      console.log('');
    }

    return ''; // use external default escaping
  }
});
md.use(emoji);

/**
 * Card View
 * @extends {React.Component}
 */
class Card extends React.Component {
  /**
   * @desc sets initial state
   */
  constructor () {
    super();
    // Bind this to functions
    this.flipCard = this.flipCard.bind(this);
    this.markCorrect = this.markCorrect.bind(this);
    this.markWrong = this.markWrong.bind(this);
  }

  flipCard () {
    this.props.flipCard();
  }

  markCorrect () {
    this.props.markCardCorrect(true);
  }
  markWrong () {
    this.props.markCardCorrect(false);
  }

  /**
  * @returns {XML}
  */
  render() {
    // Render correct class
    var cardClass = 'card'
      , index = this.props.cardIndex - this.props.currentCard;

    // Generate class for correct card position
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

    // Generate class to flip card
    if(this.props.card.answered){
      cardClass += ' is--answered';
    }

    // Generate card correct/wrong class
    var cardActionClass = 'card-action';
    // console.log('this.props.card.answeredCorrect', this.props.card.answeredCorrect);
    if(this.props.card.answeredCorrect === true) cardActionClass += ' is-correct';
    if(this.props.card.answeredCorrect === false) cardActionClass += ' is-wrong';
    // console.log('cardActionClass', cardActionClass);
    var frontHTML = {__html: md.render(this.props.card.front) };
    var backHTML = {__html: md.render(this.props.card.back)};

    return (
      <div className={cardClass}>
        <div className="card-front" onClick={this.flipCard}>
          <div className="card-content-wrapper">
            <div className="card-content" dangerouslySetInnerHTML={frontHTML}></div>
          </div>
          <div className="u-textCenter card-btn-wrapper">
            <small className="question-showAnswer card-flip">
              <i className="fa fa-refresh"></i>
              flip card to see answer
            </small>
          </div>
        </div>
        <div className="card-back answer">
          <div className="card-content-wrapper">
            <div className="card-content" dangerouslySetInnerHTML={backHTML}></div>
          </div>
          <small className="card-flip card-flip--back" onClick={this.flipCard}>
            <i className="fa fa-refresh"></i>
            flip card
          </small>
          <footer className={cardActionClass}>
            <div className="u-textCenter">
              <h5>How did you do?</h5>
            </div>
            <div className="u-textCenter">
              <a className="card-action-right" onClick={this.markCorrect}>
                <span className="correct-text">I was right</span>
                <i className="fa fa-check correct-icon"></i>
              </a>
              <a className="card-action-wrong" onClick={this.markWrong}>
                <span className="wrong-text">I was wrong</span>
                <i className="fa fa-times wrong-icon"></i>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardIndex: React.PropTypes.number
, currentCard: React.PropTypes.number
, card: React.PropTypes.object
, flipCard: React.PropTypes.func
, markCardCorrect: React.PropTypes.func
};

export default Card;
