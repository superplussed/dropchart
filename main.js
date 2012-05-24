require.config({
    packages: ["dropchart", "test"]
  });

require(["dropchart", "test", "./testRunner"],
  function ( dropchart, test, testRunner ) {
    testRunner.initialize();
});