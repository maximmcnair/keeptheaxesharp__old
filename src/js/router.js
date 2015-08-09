// Module Dependencies
var React = require('react');
var RouterMixin = require('react-mini-router').RouterMixin;

import Review from './components/review/ReviewView.js';
import Tags from './components/tags/TagsView.js';
import Landing from './components/landing/landing-view.js';
import Create from './components/create/create-view.js';
// import Cards from './components/cards/cards-view.js';

// Applicaton code
var App = React.createClass({
    mixins: [RouterMixin]
  , routes: {
      '/': 'landing'
    , '/tags': 'tags'
    , '/review/:tags': 'review'
    , '/create': 'create'
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
  , create: function(){
      return (
        <Create></Create>
      );
    }
  , notFound: function() {
      return this.landing();
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
