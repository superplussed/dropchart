 define('Dim', ['utils', 'jquery'], function(utils, $) {

  function Dim( options ) {
    console.log( 'init Dim' );
    this.options = options;
  }

  Dim.prototype.x = function(val) {
    return this.formatValue(val, 'x');
  };

  Dim.prototype.y = function(val) {
    return this.formatValue(val, 'y');
  };

  Dim.prototype.formatValue = function(val, axis) {
    if (typeof(val) === 'string' && val.substr(-1) === '%') {
      return val;
    } else if (this.options.usePerc) {
      return this.floatToPercOfContainer(val, axis);
    }
  };

  Dim.prototype.translateX = function(val) {
    return this.translateValue(val, 'x');
  };

  Dim.prototype.translateY = function(val) {
    return this.translateValue(val, 'y');
  };

  Dim.prototype.translateValue = function(val, axis) {
    var that = this;
    if (isNaN(val)) {
      return 0;
    } else if (typeof(val) === 'string' && val.substr(-1) === '%') {
      return this.percToFloatOfContainer(val, axis);
    } else {
      return val;
    }
  };

  Dim.prototype.getPixels = function(axis) {
    return (axis === 'y' ? this.options.height : this.options.width);
  };

  Dim.prototype.percToFloatOfContainer = function(val, axis) {
    return utils.percToFloat(val, this.getPixels(axis));
  };

  Dim.prototype.floatToPercOfContainer = function(val, axis) {
    return utils.floatToPerc(val, this.getPixels(axis));
  };

  return Dim;
});