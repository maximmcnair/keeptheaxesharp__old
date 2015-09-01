'use strict';

import React from 'react';

import CardPreview from './CardPreview';
import CardService from './../../services/CardService';

/**
 * CardList
 * @extends {React.Component}
 */
export default class CardList extends React.Component {
  /**
   * @desc sets initial state
   */
  constructor () {
    super();
    /**
     * @type {object}
     * @property {array} cards Cards shown in view
     */
    this.state =
      { cards: []
      };
  }

  /**
   * @desc gets cards from service after component has been mounted
   */
  componentDidMount () {
    CardService.getAll({}, (error, cards) => {
      if(!error){
        // Set cards to state
        this.setState({
          cards: cards
        });
      }
    });
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    // Generate card nodes from cards in state
    var cardNodes = this.state.cards.map(function(card){
      return (
        <CardPreview
          card={card}
          key={card._id}
        ></CardPreview>
      );
    });

    return (
      <section className="cardPreviewList">
        <h2 className="cardPreviewList-title">Cards</h2>
        <a className="btn btn-sm cardPreviewList-create" href="/create">Create Card</a>
        <div className="cardPreviewList-cards">
          {cardNodes}
        </div>
      </section>
    );
  }

}
