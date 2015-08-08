'use strict';

import React from 'react';

import TagComponent from './tag-component.js';

import CardService from '../../services/CardService.js';

/**
 * Review Tags Component
 * @extends {React.Component}
 */
export default class ReviewTags extends React.Component {
  /**
   * @desc sets initial state
   */
  constructor () {
    super();
    this.state =
      { tags: []
      };
  }

  /**
   * @desc assigns a baobab listener after component has been mounted
   */
  componentDidMount () {
    CardService.getTags((tags) => {
      this.setState({
        tags: tags
      });
    });
  }

  /**
   * @returns {XML}
   */
   render() {
     return (
       <div>
        <h2 className="u-textCenter">Pick tags to review</h2>
        <section className="u-textCenter">
          {this.state.tags.map(
            tag => {
              return (
                <TagComponent tag={tag} key={tag.name}></TagComponent>
              );
            }
          )}
        </section>
        <div className="u-textCenter">
          <a className="btn">Let do it</a>
        </div>
       </div>
     );
   }

}
