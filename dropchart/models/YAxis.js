define('YAxis',
  ['Axis', 'Coord', 'Line', 'utils', 'fetch', 'jquery', 'jquerySVG'],
  function(Axis, Coord, Line, utils, fetch, $) {

  YAxis.prototype = new Axis();
  YAxis.prototype.constructor = YAxis;

  function YAxis(args) {
    this.args = args;
    this.groupId = "y-axis-group";
    this.axisArgs = this.args.yAxis;
    Axis.call(this, args);
  }

  YAxis.prototype.drawLine = function() {
    new Line({
      svg: this.svg,
      className: "y-axis-line",
      parent: this.group,
      y1: 0,
      y2: this.args.chart.height,
      x: 0,
      style: this.args.yAxis.line
    });
  };

  YAxis.prototype.drawTicks = function() {
    var tickLength = this.coord.xToFloat('canvas', this.args.yAxis.tick.length) / 2,
      xPos = this.coord.xToFloat('chart', this.args.yAxis.tick.position),
      numTicks = this.args.yAxis.tick.num,
      interval = this.args.canvas.innerHeight / numTicks,
      dataPoint = 0,
      that = this,
      i;
    for (i = 1; i <= numTicks; i ++) {
      new Line({
        svg: this.svg,
        className: "y-axis-tick",
        parent: this.group,
        y: that.scale(dataPoint),
        x1: xPos + tickLength,
        x2: xPos - tickLength,
        style: this.args.yAxis.tick
      });
      dataPoint += interval;
    }
  };

  YAxis.prototype.scale = function(val) {
    return val * this.ratio;
  };

  YAxis.prototype.createScale = function() {
    this.min = utils.minFromArrayOfObj(this.data, 'y');
    this.max = utils.maxFromArrayOfObj(this.data, 'y');
    this.ratio = this.height / this.max;
  };

  return YAxis;
});