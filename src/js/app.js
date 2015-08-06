/**
 * App entry point
 * Initialisation of our app.
 */

'use strict';

import React from 'react';
import Router from 'react-router';
/* eslint-disable no-unused-vars */
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
/* eslint-enable no-unused-vars */

import Review from './views/review.js';
import Cards from './views/cards.js';
import Create from './views/create.js';
import Landing from './views/landing.js';

let App = React.createClass({
  render() {
    return (
      <section className="content">
        <nav className="nav">
          <Link to="app">Home</Link>
          <Link to="review">Review</Link>
          <Link to="cards">Cards</Link>
          <Link to="create">Create</Link>
          <Link to="landing">Landing</Link>
        </nav>
        <section className="body">
          <RouteHandler/>
        </section>
      </section>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="review" path="/review" handler={Review}/>
    <Route name="cards" path="/cards" handler={Cards}/>
    <Route name="create" path="/create" handler={Create}/>
    <Route name="landing" path="/landing" handler={Landing}/>
  </Route>
);

/* eslint-disable no-unused-vars */
Router.run(routes, function (Handler) {
/* eslint-enable no-unused-vars */
  React.render(<Handler/>, document.body);
});
