require.config({
    packages: ["dropchart", "test"],
    paths: {
      mocha:  './vendor/mocha',
      chai: './vendor/chai',
      jquery: './vendor/jquery.1.7.min'
    }
  });

require(["order!chai", "order!mocha", "dropchart", "test", "./testRunner"],
  function (chai, mocha, dropchart, test, testRunner) {
    testRunner.initialize();

});