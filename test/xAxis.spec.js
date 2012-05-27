define(['jquery', 'dropchart', 'argsFor', 'XAxis'], function($, dropchart, argsFor, XAxis) {
  
  var should = chai.should();
  var xAxisSpec = {

    run: function() {

      describe('XAxis', function() {

        before(function(done) {
          this.args = {
            canvas: argsFor.canvas(),
            data: argsFor.data()
          };
          this.canvas = new dropchart.Canvas(this.args);
          done();
        });

        beforeEach(function(done) {
          if (this.xAxis) {
            this.xAxis.destroy();
          }
          this.args.xAxis = {};
          done();
        });

        describe ("#destroy", function() {
          it ('should remove the xAxis from the canvas', function() {
            this.args.xAxis = argsFor.xAxis();
            this.xAxis = new dropchart.XAxis(this.args);
            $("#histogram").should.have('line.x-axis-line');
            this.xAxis.destroy();
            $("#histogram").should.not.have('line.x-axis-line');
          });
        });

        describe('#initialize', function() {

          describe('args.xAxis.show = true', function() {

            beforeEach(function(done) {
              this.args.xAxis = argsFor.xAxis();
              this.xAxis = new dropchart.XAxis(this.args);
              done();
            });

            it ('should draw a line for the X axis', function() {
              $("#histogram").should.have('line.x-axis-line');
            });

            it ('should draw a X axis line with the correct attributes', function() {
              var line = $('#histogram').find('line.x-axis-line');
              if (line) {
                line.attr('stroke').should.equal("#000");
                line.attr('stroke-width').should.equal("2");
                line.attr('x1').should.equal("0");
                line.attr('x2').should.equal("100%");
                line.attr('y1').should.equal("80%");
                line.attr('y2').should.equal("80%");
              } else {
                $("#histogram").should.have('line.x-axis-line');
              }
            });

          });

          describe('args.xAxis.show = false', function() {

            it ('should not draw a line for the X axis', function() {
              this.args.xAxis = {
                show: false
              };
              this.xAxis = new dropchart.XAxis(this.args);
              $('#histogram').should.not.have('line.x-axis-line');
            });

          });

          describe('args.xAxis.useTicks = true', function() {

            beforeEach(function(done) {
              this.args.xAxis = argsFor.xAxisWithTicks();
              this.xAxis = new dropchart.XAxis(this.args);
              done();
            });

            it ('should draw the correct number of ticks on the X axis', function() {
              $('line.x-axis-tick').length.should.equal(3);
            });

            it ('should place the ticks at the correct points on the axis', function() {
              $('line.x-axis-tick:eq(0)').attr("x1").should.equal("63.33");
              $('line.x-axis-tick:eq(1)').attr("x1").should.equal("190");
              $('line.x-axis-tick:eq(2)').attr("x1").should.equal("316.67");
            });

          });

        });

      });

    }

  };

  return xAxisSpec;

});


      