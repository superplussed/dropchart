define(['jquery', 'dropchart'], function($, dropchart) {
  var svgSpec = {
    run: function() {
      var svg = new dropchart.Svg(),
        expect = require('chai').expect;

      describe('Svg', function() {
        describe('#createEl', function() {
          it ('should attach an element', function() {
            svg.createEl('svg', 'histogram', {
              width: '400',
              height: '200',
              id: 'svgRoot'
            });
            expect($('#svgRoot').length).to.equal(1);
            expect($('#svgRoot').css('width')).to.equal('400px');
          });
        });
      });

    }
  };
  return svgSpec;
});