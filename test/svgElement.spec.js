define(['jquery', 'dropchart'], function($, dropchart) {
  var svgElementSpec = {
    runTests: function() {
      var svg = new dropchart.SvgElement(),
        expect = require('chai').expect;

      describe('SvgElement', function() {

        describe('#create', function() {

          it ('should attach an element', function() {
            var svgTag = svg.create('svg', 'histogram', {
              width: '400',
              height: '200'
            });
            expect($('#histogram').children('svg')).to.have.length(1);
            //expect($('#histogram').children('svg:first').css("width")).to.equal('400px');
            //svgTag.remove();
          });
/*
          it ('should create an ID if one is not passed in', function() {
            svgTag = svg.create('svg', 'histogram', {
              width: '400',
              height: '200'
            });
            expect(svgTag.id).to.exist;
            svgTag.remove();
          });

          it ('should attach the ID to the dom element', function() {
            svgTag = svg.create('svg', 'histogram', {
              width: '400',
              height: '200'
            });
            expect($("#" + svgTag.id)).to.have.length(1);
          });
*/
        });

      });

    }
  };
  return svgElementSpec;
});