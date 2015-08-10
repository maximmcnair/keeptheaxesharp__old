// Module Dependencies
var React = require('react');
var RouterMixin = require('react-mini-router').RouterMixin;

import Review from './components/review/ReviewView.js';
import Tags from './components/tags/TagsView.js';
import Landing from './components/landing/landing-view.js';
import Create from './components/create/CreateCard.js';
import CardList from './components/cards/CardList.js';

// Applicaton code
var App = React.createClass({
    mixins: [RouterMixin]
  , routes: {
      '/': 'landing'
    , '/tags': 'tags'
    , '/review/:tags': 'review'
    , '/create': 'create'
    , '/cards': 'cards'
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
  , cards: function(){
      return (
        <CardList></CardList>
      );
    }
  , notFound: function() {
      return this.landing();
    }
  , render: function() {
      var homeLinkClass = 'header-link'
        , createLinkClass = 'header-link';

      switch(true){
        case this.state.path === '/':
          homeLinkClass += ' is-active';
          break;
        case this.state.path === '/new':
          createLinkClass += ' is-active';
          break;
      }

      if(this.state.path === '/'){
        return this.landing();
      }else{
        return (
          <div>
            <div className="header-wrapper">
              <header className="header">
                <div className="header-content">
                  <a href="/" className="header-title">Keep Your Axe Sharp</a>
                  <nav className="header-nav">
                    <a href="/tags" className="header-link">Review</a>
                    <a href="/cards" className="header-link">Cards</a>
                    <a href="/logout" className="header-link">Logout</a>
                  </nav>
                </div>
              </header>
            </div>
            <section className="content">
              <div className="body">
                {this.renderCurrentRoute()}
              </div>
            </section>
          </div>
        );
      }

    }
  });

module.exports = App;
