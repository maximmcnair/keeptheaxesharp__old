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
    this.state = {showAnswer: false};
    // Bind this to functions
    this.showAnswer = this.showAnswer.bind(this);
  }

  showAnswer(){
    this.setState({
      showAnswer: true
    });
  }

  /**
  * @returns {XML}
  */
  render() {
    var frontHTML = {__html: md.render(this.props.card.front) };
    var backHTML = {__html: md.render(this.props.card.back)};
    var answerHTML;
    if(this.state.showAnswer){
      answerHTML = (
        <div dangerouslySetInnerHTML={backHTML}></div>
      );
    }else{
      answerHTML = (
        <a className="cardPreview-showAnswer" onClick={this.showAnswer}>Show Answer</a>
      );
    }

    // Generate tag nodes from tags in state
    var tagComponent = ''
    if(this.props.card.tags && this.props.card.tags.length){
      var tagNodes = this.props.card.tags.map(function(tag){
        return (
          <li key={tag} className="tag">{tag}</li>
        );
      });

      tagComponent =
        <div className="cardPreview-tags">
          <div className="tags">
            <i className="fa fa-tags tags-icon"></i>
            <ul className="tags-list">{tagNodes}</ul>
          </div>
        </div>
    }

    return (
      <div className="cardPreview">
        {tagComponent}
        <div className="cardPreview-content">
          <div dangerouslySetInnerHTML={frontHTML}></div>
        </div>
        <div className="cardPreview-answer">
          <div className="cardPreview-content">
            {answerHTML}
          </div>
        </div>
      </div>
    );
  }
}

CardPreview.propTypes = {
  card: React.PropTypes.object
};

export default CardPreview;
