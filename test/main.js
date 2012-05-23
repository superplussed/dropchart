require.config({
  paths: {
    mocha:  '../vendor/mocha',
    chai: '../vendor/chai'
  },
  urlArgs: 'uncache=' + (+new Date())
});

require([
  '../vendor/require.js',
  'order!mocha',
  'order!chai',
  'order!testRunner'
  ], function(require, mocha, chai, testRunner) {
});
