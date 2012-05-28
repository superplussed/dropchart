define(['jquery', 'test', 'dropchart'], function($, test, dropchart) {
  var testRunner = {
    initialize: function() {

      var i, specs = [
        test.histogramSpec,
        test.canvasSpec,
        test.xAxisSpec,
        test.yAxisSpec,
        test.coordSpec,
        test.utilsSpec
      ];

      mocha.setup('bdd');
      for (i = 0; i <= specs.length - 1; i ++) {
        self.prepareTest(specs[i]);
      }
      mocha.run();

    },

    prepareTest: function(spec) {

      spec.run();
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