define(['jquery', 'dropchart'], function($, dropchart) {
  
  var should = chai.should();
  var xAxisSpec = {

    run: function() {

      describe('xAxis', function() {

        before(function(done) {
          this.args = {
            canvas: {
              id: "histogram",
              userPerc: true,
              width: 400,
              height: 200,
              margin: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10
              }
            },
            data: [
              {x: "foo", y: 100},
              {x: "bar", y: 110},
              {x: "baz", y: 180}
            ]
          };
          this.canvas = new dropchart.Canvas(this.args);
          done();
        });

        beforeEach(function(done) {
          this.args.xAxis = {};
          $("#histogram").find('svg').children().remove();
          done();
        });

        describe('#initialize', function() {

          describe('args.xAxis.show = true', function() {

            beforeEach(function(done) {
              this.args.xAxis = {
                show: true,
                strokeColor: "#000",
                strokeWidth: 2,
                position: "80%"
              };
              new dropchart.xAxis(this.args);
              done();
            });

            it ('should draw a line for the X axis', function() {
              $("#histogram").should.have('line');
            });

            it ('should draw a X axis line with the correct attributes', function() {
              var line = $('#histogram').find('line');
              if (line) {
                line.attr('stroke').should.equal("#000");
                line.attr('stroke-width').should.equal("2");
                line.attr('x1').should.equal("0");
                line.attr('x2').should.equal("100%");
                line.attr('y1').should.equal("80%");
                line.attr('y2').should.equal("80%");
              } else {
                $("#histogram").should.have('line');
              }
            });

          });

          describe('args.xAxis.show = false', function() {

            it ('should not draw a line for the X axis', function() {
              this.args.xAxis = {
                show: false
              };
              var xAxis = new dropchart.xAxis(this.args);
              $('#histogram').should.not.have('line');
            });

          });

          describe('args.xAxis.useTicks = true', function() {

            beforeEach(function(done) {
              this.args.xAxis = {
                show: true,
                strokeColor: "#000",
                strokeWidth: 2,
                position: "80%",
                useTicks: true,
                ticks: {
                  opacity: 1,
                  strokeColor: "#000",
                  strokeWidth: 1,
                  length: 10
                }
              };
              new dropchart.xAxis(this.args);
              done();
            });

            it ('should draw the correct number of ticks on the X axis', function() {
              $('line.x-axis-tick').length.should.equal(3);
            });

            it ('should place the ticks at the correct points on the axis', function() {
              $('line.x-axis-tick:eq(0)').attr("x1").should.equal("66.67");
              $('line.x-axis-tick:eq(1)').attr("x1").should.equal("200");
              $('line.x-axis-tick:eq(2)').attr("x1").should.equal("333.33");
            });

          });

        });

      });

    }

  };

  return xAxisSpec;

});


      