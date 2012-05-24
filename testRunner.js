define(['test', 'dropchart'], function(test, dropchart) {
  var testRunner = {
    initialize: function() {
      mocha.setup('bdd');
      test.utilsSpec.runTests();
      //test.svgElementSpec.runTests();
      test.uiDropchartSpec.runTests();
      mocha.run();
    }
  };

  return testRunner;
});