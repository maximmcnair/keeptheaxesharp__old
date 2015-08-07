'use strict';

import React from 'react';

/**
 * Review Tags Component
 * @extends {React.Component}
 */
export default class ReviewTags extends React.Component {
  /**
   * @desc sets initial state
   */
  constructor (props) {
    super(props);
    this.state = {checked: props.tag.checked};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({
      checked: !this.state.checked
    });
  }

  /**
   * @returns {XML}
   */
  render() {
    var tagClass = 'tagCheckbox';
    if(this.state.checked){
      tagClass += ' is--checked';
    }
    return (
      <div className={tagClass} onClick={this.handleClick}>{this.props.tag.name}</div>
    );
  }
}

ReviewTags.propTypes =
  { tag: React.PropTypes.shape(
    { name: React.PropTypes.string.isRequired
    })
  };
