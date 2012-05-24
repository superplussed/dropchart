define(['jquery', 'dropchart'], function($, dropchart) {
  var uiDropchartSpec = {

    runTests: function() {

      var expect = require('chai').expect;
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
          it ('should exist', function() {
            expect(this.chart('getOptions')).to.have.property('options');
          });

          it ('should have default options set', function() {
            expect(this.chart.options).to.have.property('xAxisPosition');
          });

        });

        describe("#data", function() {
          it ('should exist', function() {
            expect(this.chart).to.have.property('data');
          });
        });

        describe("#boundaries()", function() {
          it ('should use the container for fullWidth and fullHeight');
          it ('should use the container minus margins for width and height');
        });

      });
    }
  };

  return uiDropchartSpec;
});