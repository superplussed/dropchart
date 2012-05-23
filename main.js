require.config({
    packages: ["dropchart", "test"],
    paths: {
      mocha:  '../vendor/mocha',
      chai: '../vendor/chai',
      jquery: '../vendor/jquery.1.7.min'
    },
    baseUrl: "./"
});

require(["dropchart", "test"], function (dropchart) {

});