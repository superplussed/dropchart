define('XAxis', ['Coord', 'Line', 'utils', 'fetch', 'jquery', 'jquerySVG'],
  function(Coord, Line, utils, fetch, $) {

  function XAxis(args) {
    console.log('init XAxis');

    this.args = args;
    this.data = args.data;
    this.svg = fetch.svg(args);
    this.coord = new Coord(this.args);
    this.createScale();
    if (this.args.xAxis.show) {
      this.drawLine();
    }
    if (this.args.xAxis.useTicks) {
      this.drawTicks();
    }
    if (this.args.xAxis.useLabels) {
      this.drawLabels();
    }
  }

  XAxis.prototype.destroy = function() {
    if (this.xAxisGroup) {
      $(this.xAxisGroup).remove();
    }
  };

  XAxis.prototype.drawLine = function() {
    this.xAxisGroup = this.svg.group("x-axis");
    new Line({
      svg: this.svg,
      className: "x-axis-line",
      parent: this.xAxisGroup,
      x1: 0,
      x2: "100%",
      y: this.args.xAxis.position,
      style: this.args.xAxis
    });
  };

  XAxis.prototype.drawTicks = function() {
    var tickLength = this.coord.yToFloat(this.args.xAxis.tick.length) / 2,
      yPos = this.coord.yToFloat(this.args.xAxis.position),
      i;
    for (i = 0; i <= this.max; i ++) {
      new Line({
        svg: this.svg,
        className: "x-axis-tick",
        parent: this.xAxisGroup,
        x: this.scale(i),
        y1: yPos + tickLength,
        y2: yPos - tickLength,
        style: this.args.xAxis.tick
      });
    }
  };

  XAxis.prototype.scale = function(val) {
    return this.scaleArray[val].coord;
  };

  XAxis.prototype.createScale = function() {
    var i,
      coord;
    this.scaleArray = [];
    this.min = 0;
    this.max = this.data.length - 1;
    this.width = (this.args.canvas.innerWidth ? this.args.canvas.innerWidth : this.args.canvas.width);
    this.interval = this.width / this.args.data.length;
    coord = this.interval / 2;
    for (i = this.min; i <= this.max; i ++) {
      this.scaleArray[i] = {x: i, coord: utils.roundNumber(coord, 2)};
      coord += this.interval;
    }
  };

  return XAxis;
});