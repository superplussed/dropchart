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

        describe ("#destroy", function() {
          it ('should remove the histogram from the canvas', function() {
            this.histogram = new dropchart.Histogram(this.xAxis, this.yAxis, argsFor.histogram());
            $("#histogram").should.have('rect.histogram-bar');
            this.histogram.destroy();
            $("#histogram").should.not.have('rect.histogram-bar');
          });
        });

        describe('#initialize', function() {
          
          before(function(done) {
            this.histogram = new dropchart.Histogram(this.xAxis, this.yAxis, argsFor.histogram());
            done();
          });

          it ('should render the correct number of bars in the histogram', function() {
            $('rect.histogram-bar').length.should.equal(3);
          });

          it ('should render the bars with the correct heights', function() {
            $('rect.histogram-bar:eq(0)').attr("height").should.equal("180");
            $('rect.histogram-bar:eq(1)').attr("height").should.equal("110");
            $('rect.histogram-bar:eq(2)').attr("height").should.equal("100");
          });

          it ('should render the bars with the correct x values', function() {
            $('rect.histogram-bar:eq(0)').attr("x").should.equal("0");
            $('rect.histogram-bar:eq(1)').attr("x").should.equal("126.67");
            $('rect.histogram-bar:eq(2)').attr("x").should.equal("253.34");
          });

          it ('should render the bars with the correct y values', function() {
            $('rect.histogram-bar:eq(0)').attr("y").should.equal("0");
            $('rect.histogram-bar:eq(1)').attr("y").should.equal("70");
            $('rect.histogram-bar:eq(2)').attr("y").should.equal("80");
          });

          it ('should render bars with the correct attributes', function() {

            var bar = $('#histogram').find('rect.histogram-bar:first');
            if (bar.length) {
              bar.attr('width').should.equal("126.67");
              bar.attr('height').should.equal("180");
              bar.attr('rx').should.equal("5");
              bar.attr('ry').should.equal("5");
              bar.attr('fill').should.equal("#DDDDDD");
              bar.attr('stroke').should.equal("#000000");
              bar.attr('stroke-width').should.equal("2");
              bar.attr('opacity').should.equal("1");
            }
          });

          describe("args.bar.widthModifier = 0.9", function() {

            it ('should modifify the bar width', function() {
              this.histogram.destroy();
              this.histogram = new dropchart.Histogram(this.xAxis, this.yAxis, argsFor.histogram());
              $('#histogram').find('rect.histogram-bar:first').attr('width').should.equal('100');
            });

          });

        });

      });

    }

  };

  return histogramName;

});


      