'use strict';

var React = require('react');
var Category = require('./Category.jsx');

var App = React.createClass({


  /* jshint ignore:start */
  render: function() {
    return (
      <div>
        <header>
        </header>

        <Category></Category>

      </div>
    );
  }
  /* jshint ignore:end */

});

module.exports = App;
