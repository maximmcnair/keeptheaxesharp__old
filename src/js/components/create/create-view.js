'use strict';

import React from 'react';

// Codemirror dependencies
var CodeMirror = require('react-code-mirror');
require('codemirror/mode/gfm/gfm');
require('codemirror/mode/javascript/javascript');

//
import CardService from './../../services/CardService.js';
var navigate = require('react-mini-router').navigate;

/**
 * Create View
 * @extends {React.Component}
 */
export default class Create extends React.Component {
  /**
   * @desc sets initial state
   */
  constructor () {
    super();
    // Set initial state
    this.state =
      { front: '```javascript\n// Iterate through object properties\n\nvar obj =\n  { name: \"Pete\"\n  , age: \"20\"\n  }```'
      , back: ''
      , tab: 'front'
      };
    // Bind this to functions
    this.onFrontChange = this.onFrontChange.bind(this);
    this.onBackChange = this.onBackChange.bind(this);
    this.createCard = this.createCard.bind(this);
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
    CardService.create(newCard, function(error, card){
      console.log(error, card);
      if(!error){
        navigate('/tags');
      }
    });
  }

  /**
   * @returns {XML}
   */
  render() {
    return (
      <div>
        <CodeMirror
          value={this.state.front}
          mode='gfm'
          theme='default'
          onChange={this.onFrontChange}
        ></CodeMirror>
        <CodeMirror
          value={this.state.back}
          mode='gfm'
          theme='default'
          onChange={this.onBackChange}
        ></CodeMirror>
        <a onClick={this.createCard} className="btn btn-icon">Create card</a>
      </div>
    );
  }

}
