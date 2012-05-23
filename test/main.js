require.config({
  paths: {
    jquery: './vendor/jquery.1.7.min',
    testRunner: './test/testRunner'
  },
  urlArgs: 'uncache=' + (+new Date())
});

define(function(require, exports, module) {
  var utilsSpec = require("./utils.spec");
  var chartSpec = require("./chart.spec");
  return utilsSpec;
});
