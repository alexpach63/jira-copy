'use strict';

require("babel-register")({
  presets: ["es2015", "react", "stage-0"],
  plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
});

var server = require('./server').default;

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});