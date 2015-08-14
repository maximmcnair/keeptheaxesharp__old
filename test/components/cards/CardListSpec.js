// /**
//  * Card List Spec
//  */
//
// 'use strict';
//
// import {expect} from 'chai';
// import jsdom from 'jsdom';
// import cheerio from 'cheerio';
// var mockery = require('mockery');
// var sinon = require('sinon');
//
// var React, TestUtils;
// // Require React testing modules
// React = require('react/addons');
// TestUtils = React.addons.TestUtils;
//
// /**
//  * @test {CardListComponent}
//  */
// describe('CardList Component', () => {
//   var CardServiceStub, CardListComponent;
//
//   before(function () {
//     // // remove react from the require cache
//     // for (var key in require.cache) {
//     //   if (key.match(/\/node_modules\/react\//)) {
//     //     delete require.cache[key];
//     //   }
//     // }
//     // // init jsdom
//     // global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
//     // global.window = document.parentWindow;
//     // // Setup mockery
//     // mockery.enable({
//     //   warnOnReplace: false
//     // , warnOnUnregistered: false
//     // , useCleanCache: true
//     // });
//     // // Create stub for ajax method
//     // CardServiceStub = {getAll: sinon.stub()};
//     // // replace the module `request` with a stub object
//     // mockery.registerMock('CardService', CardServiceStub);
//     // require CardListComponent
//     var CardListComponent = require('./../../../src/js/components/cards/CardList.js');
//   });
//
//   after(function(){
//     mockery.disable();
//   });
//
//   it('Get cards form CardService', function(){
//     var renderedCardList = TestUtils.renderIntoDocument(
//       <CardListComponent/>, document.body
//     );
//     // var cardHTML = React.findDOMNode(renderedCardList).innerHTML;
//     // expect CardService to be called
//     // expect(CardServiceStub.ajax.calledOnce).to.be.true;
//     // expect state to be set
//     // expect cards to be rendered
//   });
//
//   it.skip('should have a button for creating a card', function(){
//     // expect button to have `Create Card`
//     // expect button to link to url `/create`
//   });
//
// });
