define(['jquery', 'test', 'dropchart'], function($, test, dropchart) {
  var testRunner = {
    initialize: function() {
      mocha.setup('bdd');
      self.prepareTest(test.utilsSpec.run);
      self.prepareTest(test.canvasSpec.run);
      mocha.run();
    },
    prepareTest: function(runTest) {
      runTest();
      $("#histogram").css({
        'width': '',
        'height': ''
      });
    }
  };
  var self = testRunner;
  return testRunner;
});