define('YAxis', ['Coord', 'Line', 'utils', 'fetch', 'jquery', 'jquerySVG'],
  function(Coord, Line, utils, fetch, $) {

  function YAxis(args) {
    console.log('init YAxis');

    this.groupId = "y-axis-group";
    this.args = args;
    this.data = args.data;
    this.svg = fetch.svg(args);

    if (this.args.chart && this.args.chart.height) {
      this.height = this.args.chart.height;
    } else if (this.args.canvas.innerHeight) {
      this.height = this.args.canvas.innerHeight;
    } else {
      this.height = this.args.canvas.height;
    }

    this.coord = new Coord(args);
    this.createScale();
  }

  YAxis.prototype.destroy = function() {
    if (this.group) {
      $(this.group).remove();
    }
  };

  YAxis.prototype.render = function() {

    if (!this.group) {
      if (this.args.chart && this.args.chart.group) {
        this.group = this.svg.group(fetch.svgGroup(this.args, this.args.chart.group), this.groupId);
      } else {
        this.group = this.svg.group(this.groupId);
      }
    }

    if (this.args.yAxis.drawLine) {
      this.drawLine();
    }
    if (this.args.yAxis.drawTicks) {
      this.drawTicks();
    }
    if (this.args.yAxis.drawLabels) {
      this.drawLabels();
    }
  };

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