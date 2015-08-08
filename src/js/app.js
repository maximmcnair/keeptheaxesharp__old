/**
 * App entry point
 * Initialisation of our app.
 */

'use strict';

import React from 'react';
import Router from 'react-router';
import { Link, Route, RouteHandler } from 'react-router';

import Review from './components/review/review-view.js';
import Tags from './components/tags/TagsView.js';
import Landing from './components/landing/landing-view.js';
import Cards from './components/cards/cards-view.js';
import Create from './components/create/create-view.js';

let App = React.createClass({
  render() {
    return (
      <section className="content">
        <nav className="nav">
          <Link to="app">Home</Link>
          <Link to="tags">Tags</Link>
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
    <Route name="tags" path="/tags" handler={Tags}/>
    <Route name="review" path="/review" handler={Review}/>
    <Route name="cards" path="/cards" handler={Cards}/>
    <Route name="create" path="/create" handler={Create}/>
    <Route name="landing" path="/landing" handler={Landing}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
