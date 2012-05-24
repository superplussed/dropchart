define(['jquery', 'dropchart'], function($, dropchart) {
  var chartSpec = {

    run: function() {

      var expect = require('chai').expect;
      $("#histogram")
        .css("display", "block")
        .css("height",  200)
        .css("width", 400)
        .css("border", "1px solid gray");

      describe("Chart", function() {

        before(function(done){
          this.chart = new dropchart.Chart({
            id: 'histogram',
            marginLeft: 11,
            marginRight: 22,
            marginBottom: 33,
            marginTop: 44,
            data: [
              {x: 1, y: 5},
              {x: 3, y: 7}
            ]
          });
          done();
        });

        describe("#options", function() {
          it ('should exist', function() {
            expect(this.chart).to.have.property('options');
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

  return chartSpec;
});