 define('Coord', ['utils', 'jquery'], function(utils, $) {

  function Coord( options ) {
    console.log( 'init Coord' );
    this.options = options;
  }

  Coord.prototype.x = function(val) {
    return this.formatValue(val, 'x');
  };

  Coord.prototype.y = function(val) {
    return this.formatValue(val, 'y');
  };

  Coord.prototype.formatValue = function(val, axis) {
    if (typeof(val) === 'string' && val.substr(-1) === '%') {
      return val;
    } else if (this.options.usePerc) {
      return this.floatToPercOfContainer(val, axis);
    }
  };

  Coord.prototype.translateX = function(val) {
    return this.translateValue(val, 'x');
  };

  Coord.prototype.translateY = function(val) {
    return this.translateValue(val, 'y');
  };

  Coord.prototype.translateValue = function(val, axis) {
    var that = this;
    if (isNaN(val)) {
      return 0;
    } else if (typeof(val) === 'string' && val.substr(-1) === '%') {
      return this.percToFloatOfContainer(val, axis);
    } else {
      return val;
    }
  };

  Coord.prototype.getPixels = function(axis) {
    return (axis === 'y' ? this.options.height : this.options.width);
  };

  Coord.prototype.percToFloatOfContainer = function(val, axis) {
    return utils.percToFloat(val, this.getPixels(axis));
  };

  Coord.prototype.floatToPercOfContainer = function(val, axis) {
    return utils.floatToPerc(val, this.getPixels(axis));
  };

  return Coord;
});