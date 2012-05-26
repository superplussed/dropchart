define(['dropchart'], function(dropchart) {
  
  var should = chai.should();
  var canvasSpec = {
    name: "canvas.spec",
    run: function() {
      describe('Canvas', function() {

        before(function(done){
          this.canvas = new dropchart.Canvas({
            canvas: {
              id: "histogram",
              userPerc: true,
              width: 400,
              height: 200,
              margin: {
                top: 44,
                right: 33,
                bottom: 22,
                left: 11
              }
            }
          });
          done();
        });

        describe('#initialize()', function() {
          it ('should attach an SVG element', function() {
            $("#histogram").should.have('svg');
          });

          it ('should set the div container to width and height', function() {
            $("#histogram").css("width").should.equal("400px");
            $("#histogram").css("height").should.equal("200px");
          });

          it ('should set the svg container to width and height minus margins', function() {
            $("#histogram").children('svg').css("width").should.equal("356px");
            $("#histogram").children('svg').css("height").should.equal("134px");
          });

        });
      });

    }

  };
  return canvasSpec;

});


      