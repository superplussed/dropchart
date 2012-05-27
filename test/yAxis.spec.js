define(['jquery', 'dropchart', 'argsFor', 'YAxis'], function($, dropchart, argsFor, YAxis) {
  
  var should = chai.should();
  var yAxisSpec = {

    run: function() {

      describe('YAxis', function() {

        before(function(done) {
          this.args = {
            canvas: argsFor.canvas(),
            data: argsFor.data()
          };
          this.canvas = new dropchart.Canvas(this.args);
          done();
        });

        beforeEach(function(done) {
          if (this.yAxis) {
            this.yAxis.destroy();
          }
          this.args.yAxis = {};
          done();
        });

        describe ("#destroy", function() {
          it ('should remove the yAxis from the canvas', function() {
            this.args.yAxis = argsFor.yAxis();
            this.yAxis = new dropchart.YAxis(this.args);
            $("#histogram").should.have('line.y-axis-line');
            this.yAxis.destroy();
            $("#histogram").should.not.have('line.y-axis-line');
          });
        });

        describe('#initialize', function() {

          describe('args.yAxis.show = true', function() {

            beforeEach(function(done) {
              this.args.yAxis = argsFor.yAxis();
              this.yAxis = new dropchart.YAxis(this.args);
              done();
            });

            it ('should draw a line for the Y axis', function() {
              $("#histogram").should.have('line.y-axis-line');
            });

            it ('should draw a Y axis line with the correct attributes', function() {
              var line = $('#histogram').find('line.y-axis-line');
              if (line) {
                line.attr('stroke').should.equal("#000");
                line.attr('stroke-width').should.equal("2");
                line.attr('x1').should.equal("5%");
                line.attr('x2').should.equal("5%");
                line.attr('y1').should.equal("0");
                line.attr('y2').should.equal("100%");
              } else {
                $("#histogram").should.have('line.y-axis-line');
              }
            });

          });

          describe('args.yAxis.show = false', function() {

            it ('should not draw a line for the Y axis', function() {
              this.args.yAxis = {
                show: false
              };
              this.yAxis = new dropchart.YAxis(this.args);
              $('#histogram').should.not.have('line.y-axis-line');
            });

          });

          describe('args.yAxis.useTicks = true', function() {

            beforeEach(function(done) {
              this.args.yAxis = argsFor.yAxisWithTicks();
              this.yAxis = new dropchart.YAxis(this.args);
              done();
            });

            it ('should draw the correct number of ticks on the Y axis', function() {
              $('line.y-axis-tick').length.should.equal(4);
            });

            it ('should place the ticks at the correct points on the axis', function() {
              $('line.y-axis-tick:eq(1)').attr("y1").should.equal(0);
              $('line.y-axis-tick:eq(2)').attr("y1").should.equal(0);
              $('line.y-axis-tick:eq(3)').attr("y1").should.equal(0);
            });

          });

        });

      });

    }

  };

  return yAxisSpec;

});