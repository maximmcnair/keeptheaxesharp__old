'use strict';

import React from 'react';
import CardComponent from './CardComponent.js';
import ScoreComponent from './ScoreComponent.js';

import CardService from './../../services/CardService.js';


/**
 * Review View
 * @extends {React.Component}
 */
class Review extends React.Component {
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
   * @desc gets correct cards from tags defined in props
   */
  componentDidMount () {
    // Has tags (logged in user)
    if(this.props.tags){
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
    }else if(this.props.cards){
      this.setState({cards: this.props.cards});
    }
  }

  /**
   * @desc show next card in list
   */
  showNextCard() {
    // Increase currentCard
    this.setState({currentCard: this.state.currentCard + 1});
    // Check if there is another card
    if(this.state.cards.length === this.state.currentCard) this.setState({finished: true});
  }

  /**
   * @desc flips cards over to see back/front
   */
  flipCard() {
    // Copy state.cards to avoid mutating state
    var cardArray = this.state.cards;
    // Change card
    cardArray[this.state.currentCard].answered = !cardArray[this.state.currentCard].answered;
    // Update state
    this.setState({cards: cardArray});
  }

  /**
   * @desc deals with the timing of changing the state for the animation, also updates total scores
   * @param {Boolean} answeredCorrect Was the card answered correct or not
   */
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
        <ScoreComponent correct={this.state.scoreCorrect} wrong={this.state.scoreWrong}></ScoreComponent>
      );
    }

    console.log(cardNodes)

    return (
      <div className="card-container">
        {cardNodes}
      </div>
    );
  }

}

Review.propTypes = {
  tags: React.PropTypes.string
, cards: React.PropTypes.array
};

export default Review;
