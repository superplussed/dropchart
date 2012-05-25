define(['dropchart'], function(dropchart) {
  
  var should = chai.should();
  var canvasSpec = {

    run: function() {
      describe('Canvas', function() {


        before(function(done){
          this.canvas = new dropchart.Canvas($("#histogram"), {
            width: 400,
            height: 200,
            margin: [44, 33, 22, 11]}
          );
          done();
        });

        describe('#initialize()', function() {
          it ('should attach an SVG element', function() {
            $("#histogram").should.have('svg');
          });

          it ('should set the correct dimensions for the div container', function() {
            $("#histogram").css("width").should.equal("400px");
            $("#histogram").css("height").should.equal("200px");
          });

          it ('should set the correct dimensions for the svg container', function() {
            $("#histogram").css("width").should.equal("400px");
            $("#histogram").css("height").should.equal("200px");
          });

        });
      });

    }

  };
  return canvasSpec;

});


      