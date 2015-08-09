'use strict';

import React from 'react';
var CodeMirror = require('react-code-mirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/gfm/gfm');


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
      { front: "GitHub Flavored Markdown\n========================\n\nEverything from markdown plus GFM features:\n\n## URL autolinking\n\nUnderscores_are_allowed_between_words.\n\n## Strikethrough text\n\nGFM adds syntax to strikethrough text, which is missing from standard Markdown.\n\n~~Mistaken text.~~\n~~**works with other fomatting**~~\n\n~~spans across\nlines~~\n\n## Fenced code blocks (and syntax highlighting)\n\n```javascript\nfor (var i = 0; i &lt; items.length; i++) {\n    console.log(items[i], i); // log them\n}\n```"
      , back: ''
      , tab: 'front'
      };
  }

  onFrontChange(e) {
    this.setState({front: e.target.value});
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
      </div>
    );
  }

}
