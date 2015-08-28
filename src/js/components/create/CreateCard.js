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
      };

    // Bind this to functions
    this.onFrontChange = this.onFrontChange.bind(this);
    this.onBackChange = this.onBackChange.bind(this);
    this.createCard = this.createCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.updateTags = this.updateTags.bind(this);
  }

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

  onFrontChange(e) {
    this.setState({front: e.target.value});
  }

  onBackChange(e) {
    this.setState({back: e.target.value});
  }

  createCard() {
    var card =
      { front: this.state.front
      , back: this.state.back
      , tags: this.state.tags
      };

    if(this.state.edit){
      CardService.update(this.props.id, card, function(error){
        console.log(error);
        if(!error){
          navigate('/cards');
        }
      });
    }else{
      CardService.create(card, function(error){
        console.log(error);
        if(!error){
          navigate('/cards');
        }
      });
    }
  }

  flipCard() {
    this.setState({
      answered: !this.state.answered
    });
  }

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

    if(this.state.edit){
      var saveBtnContent = 'Save Changes';
    }else{
      var saveBtnContent = 'Create Card';
    }

    return (
      <div className="card-container">
        <div className={cardClass}>
          <div className="card-front">
            <div className="card-content-wrapper">
              <CodeMirror
                value={this.state.front}
                mode='gfm'
                theme='default'
                onChange={this.onFrontChange}
              ></CodeMirror>
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
  answered: React.PropTypes.boolean
};

export default CreateCard;
