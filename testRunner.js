define(['jquery', 'test', 'dropchart'], function($, test, dropchart) {
  var testRunner = {
    initialize: function() {

      var i, specs = [
        test.utilsSpec,
        test.coordSpec,
        test.canvasSpec,
        test.xAxisSpec
      ];

      mocha.setup('bdd');
      for (i = 0; i <= specs.length - 1; i ++) {
        console.log("test: " +  specs[i].name);
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