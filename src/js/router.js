// Module Dependencies
var React = require('react');
var RouterMixin = require('react-mini-router').RouterMixin;

import Review from './components/review/ReviewView.js';
import Tags from './components/tags/TagsView.js';
import Landing from './components/landing/landing-view.js';
// import Cards from './components/cards/cards-view.js';
// import Create from './components/create/create-view.js';

// Applicaton code
var App = React.createClass({
    mixins: [RouterMixin]
  , routes: {
      '/': 'landing'
    , '/tags': 'tags'
    , '/review/:tags': 'review'
    }
  , landing: function(){
      return (
        <Landing></Landing>
      );
    }
  , tags: function(){
      return (
        <Tags></Tags>
      );
    }
  , review: function(tags){
      return (
        <Review tags={tags}></Review>
      );
    }
  , notFound: function() {
      return this.discover();
    }
  , render: function() {
      return (
        <div className="body">
          {this.renderCurrentRoute()}
        </div>
      );
    }
  });

module.exports = App;
