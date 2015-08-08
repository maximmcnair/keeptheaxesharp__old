/**
 * App entry point
 * Initialisation of our app.
 */

'use strict';

import React from 'react';

var router = React.createFactory(require('./router.js'));

React.render(
  router()
, document.body
);
