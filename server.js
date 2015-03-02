'use strict';

var http = require('http');
var router = require('routes')();
var ecstatic = require('ecstatic')(__dirname + '/static');
var categories = require('./data/categories');

router.addRoute('/api/categories', function (req, res, params) {
  res.setHeader('content-type', 'application/json');
  res.write(JSON.stringify(categories));
  res.end();
});

var server = http.createServer(function (req, res) {
  var m = router.match(req.url);
  if (m) m.fn(req, res, m.params);
  else ecstatic(req, res);
});

server.listen(5000, function () {
  console.log('listening on :' + server.address().port);
});

