define(['jquery', 'jquerySVG', 'dropchart', 'argsFor', 'stub'], function($, jSVG, dropchart, argsFor, stub) {
  
  var should = chai.should();
  var histogramName = {

    run: function() {
      describe('Histogram', function() {

        before(function(done) {
          this.canvas = stub.canvas();
          this.xAxis = stub.xAxis();
          this.yAxis = stub.yAxis();
          done();
        });

        describe('#initialize', function() {

          it ('should render the correct number of bars in the histogram', function() {
            new dropchart.Histogram(this.xAxis, this.yAxis, argsFor.histogram());
            $('rect.histogram-bar').length.should.equal(3);
          });

          it ('should render bars with the correct attributes', function() {
/*
            var bar = $('#histogram').find('rect.histogram-bar:first');
            if (bar.length) {
              bar.attr('color').should.equal("#DDDDDD");
              bar.attr('stroke-color').should.equal("#000000");
              bar.attr('stroke-width').should.equal("2");
              bar.attr('opacity').should.equal("1");
              bar.attr('radius').should.equal("5");
              bar.attr('width').should.equal("5");
            }
            */
          });

          describe("args.bar.widthModifier = 0.9", function() {

            it ('should modifify the bar width', function() {

            });

          });

        });

      });

    }

  };

  return histogramName;

});


      