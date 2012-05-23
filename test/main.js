require.config({
  paths: {
    mocha:  '../vendor/mocha',
    chai: '../vendor/chai',
    jquery: '../vendor/jquery.1.7.min',
    dropchart: '../dropchart/main'
  },
  baseUrl: './',
  urlArgs: 'uncache=' + (+new Date())
});

require([
  '../vendor/require.js',
  'order!jquery',
  'order!mocha',
  'order!chai',
  'order!dropchart',
  'order!testRunner'
  ], function(require, $, mocha, chai, dropchart, testRunner) {
});
