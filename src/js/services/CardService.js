'use strict';

import cards from './../fixtures/cards.js';
import tags from './../fixtures/tags.js';

let CardService =
  { getAll: function (cb) {
      cb(null, cards);
    }
  , getTags: function (cb) {
      cb(null, tags);
    }
  };

export default CardService;
