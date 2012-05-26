define(['jquery', 'dropchart'], function($, dropchart) {
  
  var should = chai.should();
  var coordSpec = {

    run: function() {
      describe('Coord', function() {

        describe("options.usePerc: true", function() {

          before(function(done){
            this.coord = new dropchart.Coord({
              width: 400,
              height: 200,
              usePerc: true
            },
            [
              {x: 0, y: 200},
              {x: 1, y: 100}
            ]);
            done();
          });

          describe('#x', function() {

            it ('should convert a number to a percentage', function() {
              this.coord.x(10).should.equal("2.5%");
            });

          });

          describe('#y', function() {

            it ('should convert a number to a percentage', function() {
              this.coord.y(10).should.equal("5%");
            });

          });

          describe('#xToFloat', function() {

            it ('should convert a number to a percentage', function() {
              this.coord.xToFloat("2.5%").should.equal(10);
            });

          });

          describe('#yToFloat', function() {

            it ('should convert a number to a percentage', function() {
              this.coord.yToFloat("5%").should.equal(10);
            });

          });

        });

      });

    }

  };

  return coordSpec;

});


      