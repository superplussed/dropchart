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
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            }
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

          describe('options.show = true', function() {

            it ('should draw a line for the X Axis', function() {
              this.args.xAxis = {
                show: true,
                strokeColor: "#000",
                strokeWidth: 2,
                position: "80%"
              };
              var xAxis = new dropchart.xAxis(this.args);
              $("#histogram").should.have('line');
            });

            it ('should draw a X Axis line with the correct attributes', function() {
              this.args.xAxis = {
                show: true,
                strokeColor: "#000",
                strokeWidth: 2,
                position: "80%"
              };
              var xAxis = new dropchart.xAxis(this.args);
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

          describe('options.show = false', function() {

            it ('should not draw a line for the X Axis', function() {
              this.args.xAxis = {
                show: false
              };
              var xAxis = new dropchart.xAxis(this.args);
              $('#histogram').should.not.have('line');
            });

          });

        });

      });

    }

  };

  return xAxisSpec;

});


      