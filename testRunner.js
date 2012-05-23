define(['test', 'dropchart'], function(test, dropchart) {
  var testRunner = {
    initialize: function() {
      mocha.setup('bdd');
      test.utilsSpec.runTests();
      test.svgSpec.runTests();
      test.chartSpec.runTests();
      mocha.run();
    }
  };

  return testRunner;
});