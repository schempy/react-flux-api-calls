'use strict';

var React = require('react');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

React.render(
  React.createElement(require('./lib/components/App.jsx')),
  document.getElementById('app')
);
