'use strict';

let cards =
  { front: ''
  , back: ''
  , tags: []
  };

let tags =
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
  , { name: 'ES2015'
    , checked: false
    }
  ];

let cardService =
  { getAll: function (cb) {
      cb(null, cards);
    }
  , getTags: function (cb) {
      cb(null, tags);
    }
  };

export {cardService};
