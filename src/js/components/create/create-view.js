'use strict';

import React from 'react';
var CodeMirror = require('react-code-mirror');
require('codemirror/mode/gfm/gfm');
require('codemirror/mode/javascript/javascript');

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
  }

  onFrontChange(e) {
    this.setState({front: e.target.value});
  }

  onBackChange(e) {
    this.setState({back: e.target.value});
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
          onChange={this.onFrontChange.bind(this)}
        ></CodeMirror>
        <CodeMirror
          value={this.state.back}
          mode='gfm'
          theme='default'
          onChange={this.onBackChange.bind(this)}
        ></CodeMirror>
      </div>
    );
  }

}
