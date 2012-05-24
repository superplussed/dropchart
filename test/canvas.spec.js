define(['dropchart'], function(dropchart) {
  
  debugger;
  var should = chai.should();
  var canvasSpec = {

    runTests: function() {
      describe('Canvas', function() {

        var inspect;

  chai.use(function (chai, utils) {
    inspect = utils.inspect;

    chai.Assertion.addMethod('fail', function (message) {
      var obj = utils.flag(this, 'object');

      new chai.Assertion(obj).is.a('function');

      try {
        obj();
      } catch (err) {
        this.assert(
            err instanceof chai.AssertionError
          , 'expected #{this} to fail, but it threw ' + inspect(err));
        this.assert(
            err.message === message
          , 'expected #{this} to fail with ' + inspect(message) + ', but got ' + inspect(err.message));
        return;
      }

      this.assert(false, 'expected #{this} to fail');
    });
  });
/*
        before(function(done){
          this.canvas = new dropchart.Canvas($("#histogram"), {
            width: 400,
            height: 200,
            margin: [44, 33, 22, 11]}
          );
          done();
        });
*/
        describe('#initialize()', function() {

          it ('should attach an SVG element', function() {
            var foo = 'bar';
            
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

            it("fails when the element does not have the attribute", function(){
              (function(){
                subject.should.have.attr('bar');
              }).should.fail("expected " + inspect(subject) + " to have a 'bar' attribute");
            });

            it("fails negated when the element has the attribute", function(){
              (function(){
                subject.should.not.have.attr('name');
              }).should.fail("expected " + inspect(subject) + " not to have a 'name' attribute");
            });
          });
        });
      });

    }

  };
  return canvasSpec;

});


      