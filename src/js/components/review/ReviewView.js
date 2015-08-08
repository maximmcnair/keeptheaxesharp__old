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
    this.state = {cards: [], currentCard: 0};
  }

  /**
   * @desc assigns a baobab listener after component has been mounted
   */
  componentDidMount () {
    // console.log('review', this.props.tags.split('&') );
    CardService.getAll((error, cards) => {
      // Log error
      if(error) console.error(error);
      // Set cards to state
      this.setState({
        cards: cards
      });
    });
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
          currentCard={this.state.currentCard}
        ></CardComponent>
      );
    }.bind(this));
    console.log(this.state.cards, cardNodes);
    return (
      <div className="card-container">
        {cardNodes}
      </div>
    );
  }

}
