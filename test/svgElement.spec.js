define(['jquery', 'dropchart'], function($, dropchart) {
  var svgElementSpec = {
    runTests: function() {
      var svg = new dropchart.SvgElement(),
        expect = chai.expect;

      describe('SvgElement', function() {

        describe('#create', function() {

          it ('should attach an element', function() {
            
          });
        });

      });

    }
  };
  return svgElementSpec;
});