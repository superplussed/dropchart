require.config({
    packages: ["dropchart", "test"]
  });

require(["order!dropchart"], function(dropchart) {
  debugger;
  require(["order!test", "order!./testRunner"], function(test, testRunner) {
    testRunner.initialize();
  });
});