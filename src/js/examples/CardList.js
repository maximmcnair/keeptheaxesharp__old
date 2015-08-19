'use strict';

import React from 'react';
// var rewire = require('rewire');

// import CardPreview from './CardPreview';
// import CardService from './../../services/CardService';

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
    // Set state
    this.state =
      { cards: []
      };
  }

  /**
   * @desc assigns a baobab listener after component has been mounted
   */
  componentDidMount () {
    // Set state
    // this.setState({
    //   cards: ['one', 'two']
    // })
    CardService.getAll({}, (error, cards) => {
      console.log('**', error, cards)
      if(!error){
        // Set cards to state
        this.setState({
          cards: cards
        });
      }
    });
  }

  /**
   * @returns {XML}
   */
  render() {
    // Generate card nodes from cards in state
    // var cardNodes = this.state.cards.map(function(card){
    //   return (
    //     <CardPreview
    //       card={card}
    //     ></CardPreview>
    //   );
    // });

        // <h2 className="cardPreviewList-title">Cards</h2>
        // <a className="btn btn-sm cardPreviewList-create" href="/create"><i className="fa fa-plus"></i>Create Card</a>
        // <div className="cardPreviewList-cards">
        //   {cardNodes}
        // </div>
    return (
      <section className="cardPreviewList">
      </section>
    );
  }

}