define('yAxis', ['Coord', 'Line', 'utils', 'fetch', 'jquery', 'jquerySVG'],
  function(Coord, Line, utils, fetch, $) {

  function yAxis(args) {
    console.log('init yAxis');

    this.args = args;
    this.data = args.data;
    this.svg = fetch.svg(args);
    this.coord = new Coord(args);
    this.createScale();

    if (this.args.yAxis.show) {
      this.drawLine();
    }
    if (this.args.yAxis.useTicks) {
      this.drawTicks();
    }
    if (this.args.yAxis.useLabels) {
      this.drawLabels();
    }
  }

  yAxis.prototype.destroy = function() {
    if (this.yAxisGroup) {
      $(this.yAxisGroup).remove();
    }
  };

  yAxis.prototype.drawLine = function() {
    this.yAxisGroup = this.svg.group("y-axis");
    new Line({
      svg: this.svg,
      className: "y-axis-line",
      parent: this.yAxisGroup,
      y1: 0,
      y2: "100%",
      x: this.args.yAxis.position,
      style: this.args.yAxis
    });
  };

  yAxis.prototype.drawTicks = function() {
    var tickLength = this.coord.yToFloat(this.args.yAxis.tick.length) / 2,
      xPos = this.coord.yToFloat(this.args.yAxis.position),
      numTicks = this.args.yAxis.tick.num,
      interval = this.args.canvas.innerHeight / numTicks,
      dataPoint = 0,
      that = this,
      i;
    for (i = 1; i <= numTicks; i ++) {
      new Line({
        svg: this.svg,
        className: "y-axis-tick",
        parent: this.yAxisGroup,
        y: that.scale(dataPoint),
        x1: xPos + tickLength,
        x2: xPos - tickLength,
        style: this.args.yAxis.tick
      });
      dataPoint += interval;
    }
  };

  yAxis.prototype.scale = function(val) {
    return val * this.ratio;
  };

  yAxis.prototype.createScale = function() {
    var i,
      coord;
    this.min = utils.minFromArrayOfObj(this.data, 'y');
    this.max = utils.maxFromArrayOfObj(this.data, 'y');
    this.ratio = this.args.canvas.innerHeight / (this.max);
  };

  return yAxis;
});