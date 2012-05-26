define(['jquery', 'dropchart'], function($, dropchart) {
  
  var should = chai.should();
  var coordSpec = {
    name: "coor.spec",
    run: function() {
      describe('Coord', function() {

        describe("options.usePerc: true", function() {

          before(function(done){
            this.coord = new dropchart.Coord({
              canvas: {
                width: 400,
                innerWidth: 400,
                height: 200,
                innerHeight: 200,
                usePerc: true,
                margin: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                }
              }
            },
            [
              {x: 0, y: 200},
              {x: 1, y: 100}
            ]);
            done();
          });

          describe('#x', function() {

            it ('should convert a number to a percentage if necessary', function() {
              this.coord.x(10).should.equal("2.5%");
              this.coord.x("2.5%").should.equal("2.5%");
            });

          });

          describe('#y', function() {

            it ('should convert a number to a percentage if necessary', function() {
              this.coord.y(10).should.equal("5%");
              this.coord.y("5%").should.equal("5%");
            });

          });

          describe('#xToFloat', function() {

            it ('should convert a percentage to a number if necessary', function() {
              this.coord.xToFloat("2.5%").should.equal(10);
              this.coord.xToFloat(10).should.equal(10);
            });

          });

          describe('#yToFloat', function() {

            it ('should convert a percentage to a number if necessary', function() {
              this.coord.yToFloat("5%").should.equal(10);
              this.coord.yToFloat(10).should.equal(10);
            });

          });

        });

      });

    }

  };

  return coordSpec;

});


      