'use strict';

import React from 'react';

import TagComponent from './tag-component.js';

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
      { tags:
        [ { name: 'Go'
          , checked: false
          }
        , { name: 'Angular'
          , checked: false
          }
        , { name: 'Node.js'
          , checked: false
          }
        , { name: 'Javscript'
          , checked: false
          }
        , { name: 'React'
          , checked: false
          }
        // , { name: 'ES2015'
        //   , checked: false
        //   }
        ]
      };
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
