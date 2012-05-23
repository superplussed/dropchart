define(['../dropchart/lib/utils'], function(utils) {
  var utilsSpec = {
    runTests: function() {
      var assert = require('chai').assert;
        describe('utils', function() {
          describe('#isBlank', function() {

            it('should be true for empty string', function() {
              assert.equal(utils.isBlank(""), true);
            });

            it('should be true for null', function() {
              assert.equal(utils.isBlank(null), true);
            });

            it('should be true for false', function() {
              assert.equal(utils.isBlank(false), true);
            });

            it('should be false for 0', function() {
              assert.equal(utils.isBlank(0), false);
            });

            it('should be false with a string', function() {
              assert.equal(utils.isBlank("foo"), false);
            });

          });

          describe('#pxToInt', function(){

            it('should convert a px string to int', function() {
              assert.equal(utils.pxToInt("30px"), 30);
            });

            it('should return a number unchanged', function() {
              assert.equal(utils.pxToInt(30), 30);
            });

            it('should return a NaN for an invalid string', function() {
              assert.equal(isNaN(utils.pxToInt("foo")), true);
            });

          });

          describe('#intToPx', function(){

            it('should convert a number to the proper string', function() {
              assert.equal(utils.intToPx(30), "30px");
            });

            it('should return a string unchanged', function() {
              assert.equal(utils.intToPx("foo"), "foo");
            });

          });

          describe('#cloneObj', function(){

            it('should return a duplicate object without reference to the original', function() {
              var origObj = {"foo": "bar"};
              var newObj = utils.cloneObj(origObj);
              origObj.foo = "baz";
              assert.equal(newObj.foo, "bar");
            });

          });

          describe('#roundNumber', function(){

            it('should round a number to the desired decimal places', function() {
              assert.equal(utils.roundNumber(30.3383, 2), 30.34);
              assert.equal(utils.roundNumber(30.3313, 2), 30.33);
            });

          });

          describe('#isValidNumber', function(){

            it('should return whether a number is a non infinity, non NaN', function() {
              assert.equal(utils.isValidNumber(30 / 0), false);
              assert.equal(utils.isValidNumber(NaN), false);
              assert.equal(utils.isValidNumber(true), false);
              assert.equal(utils.isValidNumber(32), true);
            });

            it('should work for strings of numbers as well', function() {
              assert.equal(utils.isValidNumber("32"), true);
              assert.equal(utils.isValidNumber("NaN"), false);
              assert.equal(utils.isValidNumber("true"), false);
            });

          });

        });

      }

  };
  return utilsSpec;
});

