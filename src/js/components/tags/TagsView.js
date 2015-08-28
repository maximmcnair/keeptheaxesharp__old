'use strict';

import React from 'react';

import CardService from './../../services/CardService.js';
import CheckboxGroup from 'react-checkbox-group';

/**
 * Tags View
 * @extends {React.Component}
 */
export default class Tags extends React.Component {
  /**
   * @desc sets initial state
   */
  constructor () {
    super();
    this.state = {tags: [], selected: []}
    // , url: '/review/'};
  }

  /**
   * @desc gets tags form CardService and sets them as state
   */
  componentDidMount () {
    CardService.getTags((error, tags) => {
      // Log error
      if(error) console.error(error);
      // Set tags to state
      this.setState({
        tags: tags
      });
    });
  }

  /**
   * @desc gets selected tags and goes to review
   */
  handleChange () {
    // will return the currently selected checkbox values as an array, possibly empty
    var selectedTags = this.refs.tagsGroup.getCheckedValues();
    this.setState({
      url: '/review/' + selectedTags.join('&')
    , selected: selectedTags
    });
  }

  /**
  * @returns {XML}
  */
  render() {
    return (
      <div>
        <h2 className="u-textCenter">Pick tags to review</h2>
        <section className="review-tags">
          <CheckboxGroup
            name="tags"
            value={this.state.selected}
            ref="tagsGroup"
            onChange={this.handleChange.bind(this)}
          >
            {this.state.tags.map(
              tag => {
                // if(this.state.selected.indexOf(tag) !== -1){
                //   console.log('active');
                // }
                return (
                  <span key={tag}>
                    <input type="checkbox" value={tag} id={tag} className="checkbox"/>
                    <label htmlFor={tag} className="checkbox-label">
                      <i className="fa fa-check checkbox-icon"></i>
                      <span>{tag}</span>
                    </label>
                  </span>
                );
              }.bind(this)
            )}
          </CheckboxGroup>
        </section>
        <div className="u-textCenter">
          <a className="btn" href={this.state.url}>Let's do it</a>
        </div>
      </div>
    );
  }
}
