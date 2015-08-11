/**
 * App entry point
 * Initialisation of our app.
 */

'use strict';

import React from 'react';

var router = React.createFactory(require('./router.js'));

React.render(
  router({history: true, user: window.user})
, document.body
);

// Detect browser and add class name to body
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

if (isChrome) document.getElementsByTagName('body')[0].className += ' browser-chrome';
if (isSafari) document.getElementsByTagName('body')[0].className += ' browser-safari';
