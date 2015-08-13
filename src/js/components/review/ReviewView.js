'use strict';

import React from 'react';
import CardComponent from './CardComponent.js';

import CardService from './../../services/CardService.js';

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
    // Set state
    this.state =
      { cards: []
      , currentCard: 0
      , finished: false
      , scoreCorrect: 0
      , scoreWrong: 0
      // , currentCard: 4
      // , finished: true
      // , scoreCorrect: 14
      // , scoreWrong: 5
      };
    // Bind this to functions
    this.scheduleNextViewing = this.scheduleNextViewing.bind(this);
  }

  /**
   * @desc assigns a baobab listener after component has been mounted
   */
  componentDidMount () {
    var query =
      { tags: this.props.tags.split('&')
      };

    console.log('review',  query);

    CardService.getAll(query, (error, response) => {
      console.log('cards', response);
      // Log error
      if(error){
        console.error(error);
      }else{
        // Loop through cards and add answer variable
        var cards = response.map(function(card){
          card.answeredCorrect = null;
          card.answered = false;
          return card;
        });

        // Set cards to state
        this.setState({
          cards: cards
        });
      }
    });
  }

  showNextCard() {
    // Increase currentCard
    this.setState({currentCard: this.state.currentCard + 1});
    // Check if there is another card
    if(this.state.cards.length === this.state.currentCard) this.setState({finished: true});
  }

  flipCard() {
    // Copy state.cards to avoid mutating state
    var cardArray = this.state.cards;
    // Change card
    cardArray[this.state.currentCard].answered = !cardArray[this.state.currentCard].answered;
    // Update state
    this.setState({cards: cardArray});
  }

  scheduleNextViewing(answeredCorrect) {
    // Copy state.cards to avoid mutating state
    var cardArray = this.state.cards;
    // Make correct
    cardArray[this.state.currentCard].answeredCorrect = answeredCorrect;
    // Update state
    this.setState({
      scoreCorrect: answeredCorrect ? this.state.scoreCorrect + 1 : this.state.scoreCorrect
    , scoreWrong: !answeredCorrect ? this.state.scoreWrong + 1 : this.state.scoreWrong
    , cards: cardArray
    });
    // Set timeout for CSS animations
    setTimeout(function(){
      this.showNextCard();
    }.bind(this), 800);
  }

  /**
  * @returns {XML}
  */
  render() {
    // Generate card nodes from cards in state
    var cardNodes = this.state.cards.map(function(card, index){
      return (
        <CardComponent
          card={card}
          key={card._id}
          cardIndex={index}
          flipCard={this.flipCard.bind(this)}
          currentCard={this.state.currentCard}
          markCardCorrect={this.scheduleNextViewing}
        ></CardComponent>
      );
    }.bind(this));

    // If finished then render message
    if(this.state.finished){
      cardNodes.push(
        <div className="cardScore">

          <div className="cardScore-stats">
            <div className="cardScore-stat cardScore-stat-correct">
              <h4 className="cardScore-stat-title">Correct</h4>
              <h4 className="cardScore-stat-score">{this.state.scoreCorrect}</h4>
            </div>
            <div className="cardScore-stat cardScore-stat-wrong">
              <h4 className="cardScore-stat-title">Wrong</h4>
              <h4 className="cardScore-stat-score">{this.state.scoreWrong}</h4>
            </div>
          </div>

          <a href="/tags" className="cardScore-reviewMore">Review more cards</a>
        </div>
      );
    }

    return (
      <div className="card-container">
        {cardNodes}
      </div>
    );
  }

}
