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
    this.state =
      { cards: []
      , currentCard: 0
      , finished: false
      , scoreCorrect: 0
      , scoreWrong: 0
      };
  }

  /**
   * @desc assigns a baobab listener after component has been mounted
   */
  componentDidMount () {
    // console.log('review', this.props.tags.split('&') );
    CardService.getAll((error, response) => {
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

  flipCard() {
    // Copy state.cards to avoid mutating state
    var cardArray = this.state.cards;
    // Change card
    cardArray[this.state.currentCard].answered = !cardArray[this.state.currentCard].answered;
    // Update state
    this.setState({cards: cardArray});
  }

  /**
  * @returns {XML}
  */
  render() {
    var cardNodes = this.state.cards.map(function(card, index){
      return (
        <CardComponent
          card={card}
          key={card._id}
          cardIndex={index}
          flipCard={this.flipCard.bind(this)}
          currentCard={this.state.currentCard}
        ></CardComponent>
      );
    }.bind(this));
    // console.log(this.state.cards, cardNodes);
    return (
      <div className="card-container">
        {cardNodes}
      </div>
    );
  }

}
