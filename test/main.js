require.config({
  paths: {
    jquery: '../vendor/jquery.1.7.min',
    testRunner: './test/testRunner'
  },
  urlArgs: 'uncache=' + (+new Date())
});

define(function(require, exports, module) {
  var testRunner = require('testRunner');
  return testRunner;
});
