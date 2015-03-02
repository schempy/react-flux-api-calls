'use strict';

var React = require('react');
var Store = require('../stores/Store');
var ActionCreator = require('../actions/ActionCreator');

var Category = React.createClass({

  handleChange: function (e) {
    //this.transitionTo('/products/' + e.target.value);
  },

  getInitialState: function () {
    return {
      categories: []
    };
  },

  componentWillMount: function () {
    Store.addChangeListener(this._onChange);
  },

  componentDidMount: function () {
    ActionCreator.getCategories();
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      categories: Store.getCategories()
    });
  },

  /* jshint ignore:start */
  render: function () {
    var categories;

    if (this.state.categories) {
      categories = this.state.categories.map(function (category) {
        return <option key={ category.id }
            value={ category.name.toLowerCase() }>
            { category.name }</option>;
      });
    }

    return (
      <div>
        <select name="category" onChange={ this.handleChange }>
          <option value="">Select a Category</option>
          { categories }
        </select>
      </div>  
    );

  }
  /* jshint ignore:end */

});

module.exports = Category;
