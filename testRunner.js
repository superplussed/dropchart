define(['jquery', 'test', 'dropchart'], function($, test, dropchart) {
  var testRunner = {
    initialize: function() {
      mocha.setup('bdd');
      self.prepareTest(test.utilsSpec.run);
      self.prepareTest(test.coordSpec.run);
      self.prepareTest(test.canvasSpec.run);
      self.prepareTest(test.xAxisSpec.run);
      mocha.run();
    },
    prepareTest: function(runTest) {
      runTest();
      $("#histogram").css({
        'width': '',
        'height': ''
      });
      $("#histogram").children().remove();
    }
  };
  var self = testRunner;
  return testRunner;
});