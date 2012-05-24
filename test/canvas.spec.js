define(['dropchart'], function(dropchart) {
  
  var should = chai.should();
  var canvasSpec = {

    runTests: function() {
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
            //$("#histogram").should.have('svg');
          });

        });

        describe("attr", function(){
          var subject = $('<div name="foo"></div>');

          describe("when only attribute name is provided", function(){
            it("passes when the element has the attribute", function(){
              subject.should.have.attr('name');
            });

            it("passes negated when the element does not have the attribute", function(){
              subject.should.not.have.attr('bar');
            });

           
          });
        });
      });

    }

  };
  return canvasSpec;

});


      