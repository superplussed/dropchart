define(['jquery', 'dropchart'], function($, dropchart) {
  var uiDropchartSpec = {

    runTests: function() {

      var expect = chai.expect;
      describe("Chart", function() {

        before(function(done){
          $("#histogram").dropchart({
            canvas: {
              width: 400,
              height: 200,
              margin: [44, 33, 22, 11]
            },
            data: [
              {x: 1, y: 5},
              {x: 3, y: 7}
            ]
          });
          this.chart = $("#histogram").dropchart;
          done();
        });

        describe("#options", function() {
         
        });

      });
    }
  };

  return uiDropchartSpec;
});