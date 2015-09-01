// Module Dependencies
var React = require('react');
var RouterMixin = require('react-mini-router').RouterMixin;

import Review from './components/review/ReviewView.js';
import Tags from './components/tags/TagsView.js';
import Landing from './components/landing/LandingView.js';
import Create from './components/create/CreateCard.js';
import CardList from './components/cards/CardList.js';
import Onboarding from './components/onboarding/Onboarding.js';
import Demo from './components/demo/Demo.js';

// Applicaton code
var App = React.createClass({
    propTypes:
    { user: React.PropTypes.object
    }
  , mixins: [RouterMixin]
  , routes: {
      '/': 'tags'
    , '/review/:tags': 'review'
    , '/create': 'create'
    , '/cards': 'cards'
    , '/edit/:id': 'edit'
    , '/demo': 'demo'
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
  , edit: function(id){
      return (
        <Create id={id}></Create>
      );
    }
  , cards: function(){
      return (
        <CardList></CardList>
      );
    }
  , demo: function(){
      return (
        <Demo></Demo>
      );
    }
  , notFound: function() {
      return this.landing();
    }
  , render: function() {
      var tagsLinkClass = 'header-link'
        , cardsLinkClass = 'header-link';

      switch(true){
        case this.state.path === '/':
          tagsLinkClass += ' is-active';
          break;
        case this.state.path.indexOf('/review') !== -1:
          tagsLinkClass += ' is-active';
          break;
        case this.state.path === '/cards':
          cardsLinkClass += ' is-active';
          break;
      }

      if(this.state.path === '/demo'){
        return this.demo();
      }else if(this.props.user && this.props.user.onboarded){
        return (
          <div>
            <div className="header-wrapper">
              <header className="header">
                <div className="header-content">
                  <a href="/" className="header-title">Keep The Axe Sharp</a>
                  <nav className="header-nav">
                    <a href="/" className={tagsLinkClass}>Review</a>
                    <a href="/cards" className={cardsLinkClass}>Cards</a>
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
      }else if(this.props.user){
        return (
          <Onboarding user={this.props.user}></Onboarding>
        );
      }else{
        return this.landing();
      }

    }
  });

module.exports = App;
