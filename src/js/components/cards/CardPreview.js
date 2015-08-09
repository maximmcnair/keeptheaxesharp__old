'use strict';

import React from 'react';

// Markdown Dependencies
var hljs = require('highlight.js');
var emoji = require('markdown-it-emoji');
var md = require('markdown-it')({
  typographer: true
, highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {
        console.log('');
      }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {
      console.log('');
    }

    return ''; // use external default escaping
  }
});
md.use(emoji);

/**
 * CardPreview
 * @extends {React.Component}
 */
class CardPreview extends React.Component {
  /**
   * @desc sets initial state
   */
  constructor () {
    super();
  }

  /**
  * @returns {XML}
  */
  render() {
    var frontHTML = {__html: md.render(this.props.card.front) };
    // var backHTML = {__html: md.render(this.props.card.back)};

    return (
      <div className="cardPreview">
        <div className="cardPreview-content" dangerouslySetInnerHTML={frontHTML}>
        </div>
      </div>
    );
  }
}

CardPreview.propTypes = {
  card: React.PropTypes.object
};

export default CardPreview;
