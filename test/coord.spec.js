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
            });
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

        });

      });

    }

  };

  return coordSpec;

});


      