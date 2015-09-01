'use strict';

import React from 'react';

// Codemirror dependencies
var CodeMirror = require('react-code-mirror');
require('codemirror/mode/gfm/gfm');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/go/go');
require('codemirror/mode/ruby/ruby');
require('codemirror/mode/clike/clike');
require('codemirror/mode/coffeescript/coffeescript');
require('codemirror/mode/php/php');
require('codemirror/mode/python/python');
require('codemirror/mode/sql/sql');
require('codemirror/mode/clojure/clojure');
require('codemirror/mode/perl/perl');

import CardService from './../../services/CardService.js';
import TagsInput from './CardTags';
var navigate = require('react-mini-router').navigate;

/**
 * CreateCard Component
 * @extends {React.Component}
 */
class CreateCard extends React.Component {
  /**
   * @desc sets initial state
   */
  constructor () {
    super();
    // Set initial state
    this.state =
      { front: ''
      , back: ''
      , tags: []
      , answered: false
      , edit: false
      , errors:
        { front: null
        , back: null
        , tags: null
        }
      };

    // Bind this to functions
    this.onFrontChange = this.onFrontChange.bind(this);
    this.onBackChange = this.onBackChange.bind(this);
    this.createCard = this.createCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.updateTags = this.updateTags.bind(this);
    this.frontValid = this.frontValid.bind(this);
  }

  /**
   * @desc if an id is defined in props get that card's data from the CardService
   */
  componentDidMount () {
    // Change edit state if props.id exists
    if(this.props.id){
      this.setState({edit: true});
      CardService.getOne(this.props.id, function(error, card){
        this.setState({
          front: card.front
        , back: card.back
        , tags: card.tags
        });
      }.bind(this));
    }
  }

  /**
   * @desc update front of card's value
   * @param {SytheticEvent} e
   */
  onFrontChange(e) {
    this.setState({front: e.target.value});
  }

  /**
   * @desc update back of card's value
   * @param {SytheticEvent} e
   */
  onBackChange(e) {
    this.setState({back: e.target.value});
  }

  /**
   * @desc create card with state data
   */
  createCard() {
    var card =
      { front: this.state.front
      , back: this.state.back
      , tags: this.state.tags
      };

    // TODO write test
    if(this.backValid()){
      if(this.state.edit){
        CardService.update(this.props.id, card, function(error){
          if(!error){
            navigate('/cards');
          }else{
            console.log(error);
          }
        });
      }else{
        CardService.create(card, function(error){
          if(!error){
            if(user && !user.onboarded) user.onboarded = true
            navigate('/cards');
          }else{
            console.log(error);
          }
        });
      }
    }
  }

  /**
   * @desc Check front and tags of card are valid
   * @return {Boolean} frontValid
   */
  frontValid() {
    var errors = this.state.errors
    var frontValid = true;
    if(this.state.front === ''){
      errors.front = 'Content for front of card is required';
      frontValid = false;
    }else{
      errors.front = null
    }
    if(this.state.tags.length < 1){
      errors.tags = 'You must add at least one tag';
      frontValid = false;
    }else{
      errors.tags = null
    }
    this.setState({errors: errors});
    return frontValid;
  }

  /**
   * @desc Check back of card is valid
   * @return {Boolean} backValid
   */
  backValid() {
    var errors = this.state.errors
    var backValid = true;
    if(this.state.back === ''){
      errors.back = 'Content for back of card is required';
      backValid = false;
    }else{
      errors.back = null
    }
    this.setState({errors: errors});
    return backValid;
  }

  /**
   * @desc flip card over
   */
  flipCard() {
    // If flip from front
    if(!this.state.answered && this.frontValid()){
      this.setState({
        answered: !this.state.answered
      });
    }else if(this.state.answered){
      this.setState({
        answered: !this.state.answered
      });
    }
  }

  /**
   * @desc update tag state
   * @param {array} tags
   */
  updateTags(tags) {
    this.setState({
      tags: tags
    });
  }

  /**
   * @returns {XML}
   */
  render() {
    // Generate class to flip card
    var cardClass = 'card card-current';
    if(this.state.answered){
      cardClass += ' is--answered';
    }

    // Save button copy
    if(this.state.edit){
      var saveBtnContent = 'Save Changes';
    }else{
      var saveBtnContent = 'Create Card';
    }

        // <a href="/cards" className="card-backToCards">Back to Cards</a>
    return (
      <div className="card-container">
        <div className={cardClass}>
          <div className="card-front">
            <div className="card-content-wrapper">
              <span className="error">{this.state.errors.front}</span>
              <CodeMirror
                value={this.state.front}
                mode='gfm'
                theme='default'
                onChange={this.onFrontChange}
              ></CodeMirror>
              <span className="error">{this.state.errors.tags}</span>
              <TagsInput tags={this.state.tags} updateTags={this.updateTags}></TagsInput>
            </div>
            <div className="u-textCenter card-btn-wrapper">
              <small className="question-showAnswer card-flip" onClick={this.flipCard}>
                <i className="fa fa-refresh"></i>
                flip card to write answer
              </small>
            </div>
          </div>
          <div className="card-back answer">
            <div className="card-content-wrapper">
              <span className="error">{this.state.errors.back}</span>
              <CodeMirror
                value={this.state.back}
                mode='gfm'
                theme='default'
                onChange={this.onBackChange}
              ></CodeMirror>
            </div>
            <small className="card-flip card-flip--back" onClick={this.flipCard}>
              <i className="fa fa-refresh"></i>
              flip card
            </small>
            <footer className="card-action">
              <div className="u-textCenter">
                <a className="card-action-save" onClick={this.createCard}>
                  <span className="correct-text">{saveBtnContent}</span>
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }

}

CreateCard.propTypes = {
  answered: React.PropTypes.bool
, id: React.PropTypes.string
, onboarding: React.PropTypes.bool
};

export default CreateCard;
