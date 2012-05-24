define('Canvas', ['utils', 'jquery', 'jquerySVG'], function(utils, $) {
  debugger;
  function Canvas(el, options) {
    console.log('init Canvas');
    $(el).svg();
    this.options = options;
    //this.getDimensions();
  }

  Canvas.prototype.formatX = function(val) {
    return this.formatValue(val, 'x');
  };

  Canvas.prototype.formatY = function(val) {
    return this.formatValue(val, 'y');
  };

  Canvas.prototype.translateX = function(val) {
    return this.translateValue(val, 'x');
  };

  Canvas.prototype.translateY = function(val) {
    return this.translateValue(val, 'y');
  };

  Canvas.prototype.translateValue = function(val, axis) {
    var that = this;
    if ((isNaN(val) && typeof(val) === "number") || val === "%") {
      return 0;
    } else if (typeof(val) === 'string' && val.substr(-1) === '%') {
      return this.percToFloatOfContainer(val, axis);
    } else {
      return val;
    }
  };

  Canvas.prototype.percToFloatOfContainer = function(val, axis) {
      var pixels = (axis === 'y' ? this.fullHeight : this.fullWidth);
      return utils.roundNumber((utils.pixelsToInt(val) / 100) * pixels, 5);
    };

  Canvas.prototype.floatToPercOfContainer = function(val, axis) {
    var pixels = (axis === 'y' ? this.fullHeight : this.fullWidth);
    return utils.roundNumber((val / pixels) * 100, 5) + '%';
  };

  Canvas.prototype.formatValue = function(val, axis) {
    var that = this;
    if (!that.options.usePerc || (that.options.usePerc && typeof(val) === 'string' && val.substr(-1) === '%')) {
      return val;
    } else if (that.options.usePerc) {
      return this.floatToPercOfContainer(val, axis);
    }
  };

  Canvas.prototype.getDimensions = function(data) {
    var bound = this.getBoundingRect('#' + this.options.id);
    if (bound) {
      this.fullWidth = bound.width;
      this.fullHeight = bound.height;
      this.width = bound.width - this.translateX(this.options.marginLeft) - this.translateX(this.options.marginRight);
      this.height = bound.height - this.translateY(this.options.marginTop) - this.translateY(this.options.marginBottom);
    }
    if (this.height <= 0 || this.width <= 0) {
      this.abortRender = true;
    }
  };

  return Canvas;
});