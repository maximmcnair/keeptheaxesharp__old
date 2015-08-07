/**
 * App entry point
 * Initialisation of our app.
 */

'use strict';

import React from 'react';
import Router from 'react-router';
import { Link, Route, RouteHandler } from 'react-router';

import Review from './components/review/review-view.js';
import Landing from './components/landing/landing-view.js';
import Cards from './views/cards.js';
import Create from './views/create.js';

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
