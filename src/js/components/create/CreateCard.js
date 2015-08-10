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

//
import CardService from './../../services/CardService.js';
var navigate = require('react-mini-router').navigate;

import TagsInput from './CardTags';

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
      { front: '```javascript\n// Iterate through object properties\n\nvar obj =\n  { name: \"Pete\"\n  , age: \"20\"\n  }\n```'
      , back: '```go\n// You can edit this code!\n// Click here and start typing.\npackage main\n\nimport "fmt"\n\nfunc main() {\n	fmt.Println("Hello, 世界")\n}\n```'
      , answered: false
      };
    // Bind this to functions
    this.onFrontChange = this.onFrontChange.bind(this);
    this.onBackChange = this.onBackChange.bind(this);
    this.createCard = this.createCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  onFrontChange(e) {
    this.setState({front: e.target.value});
  }

  onBackChange(e) {
    this.setState({back: e.target.value});
  }

  createCard() {
    var newCard =
      { front: this.state.front
      , back: this.state.back
      };
    CardService.create(newCard, function(error){
      if(!error){
        navigate('/cards');
      }
    });
  }

  flipCard() {
    this.setState({
      answered: !this.state.answered
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
              <TagsInput></TagsInput>
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
                  <span className="correct-text">Create card</span>
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
