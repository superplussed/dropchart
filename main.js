require.config({
    packages: ["dropchart", "test"],
    paths: {
      mocha:  './vendor/mocha',
      chai: './vendor/chai',
      jquery: './vendor/jquery.1.7.min'
    }
  });

require(["order!mocha", "order!chai", "dropchart", "test", "./testRunner"], function (mocha, chai, dropchart, test) {

});