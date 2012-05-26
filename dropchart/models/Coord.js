 define('Coord', ['utils', 'jquery'], function(utils, $) {

  function Coord( args ) {
    console.log( 'init Coord' );
    this.args = args;
    this.data = args.data;

    this._toPerc = function(val, axis) {
      if (typeof(val) === 'number' && this.args.usePerc) {
        return this._floatToPercOfContainer(val, axis);
      } else {
        return val;
      }
    };

    this._toFloat = function(val, axis) {
      if (typeof(val) === 'string' && val.substr(-1) === '%') {
        return this._percToFloatOfContainer(val, axis);
      } else if (isNaN(val)) {
        return 0;
      } else {
        return val;
      }
    };

    this._getPixels = function(axis) {
      return (axis === 'y' ? this.args.height : this.args.width);
    };

    this._percToFloatOfContainer =  function(val, axis) {
      return utils.percToFloat(val, this._getPixels(axis));
    };

    this._floatToPercOfContainer = function(val, axis) {
      return utils.floatToPerc(val, this._getPixels(axis));
    };
  }

  Coord.prototype.x = function(val) {
    return this._toPerc(val, 'x');
  };

  Coord.prototype.y = function(val) {
    return this._toPerc(val, 'y');
  };

  Coord.prototype.xToFloat = function(val) {
    return this._toFloat(val, 'x');
  };

  Coord.prototype.yToFloat = function(val) {
    return this._toFloat(val, 'y');
  };

  return Coord;

});