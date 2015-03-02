'use strict';

var Dispatcher = require('../core/Dispatcher');
var ActionConstants = require('../constants/ActionConstants');
var Store = require('../stores/Store');
var Promise = require('es6-promise').Promise; // jshint ignore:line
var Api = require('../services/Api');

var ActionCreator = {

  /**
   *
   *
   */
  getCategories: function () {
    Api
      .get('/api/categories')
      .then(function (categories) {
        Dispatcher.handleViewAction({
          actionType: ActionConstants.RECEIVE_CATEGORIES,
          categories: categories
        });        
      })
      .catch(function () {
        Dispatcher.handleViewAction({
          actionType: ActionConstants.RECEIVE_ERROR,
          error: 'There was a problem getting the categories'
        });      
      });
  }
};

module.exports = ActionCreator;
