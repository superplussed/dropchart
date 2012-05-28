define('XAxis', ['Coord', 'Line', 'utils', 'fetch', 'jquery', 'jquerySVG'],
  function(Coord, Line, utils, fetch, $) {

  function XAxis(args) {
    console.log('init XAxis');

    this.groupId = "x-axis-group";
    this.args = args;
    this.data = args.data;
    this.svg = fetch.svg(args);

    if (this.args.chart && this.args.chart.width) {
      this.width = this.args.chart.width;
    } else if (this.args.canvas.innerWidth) {
      this.width = this.args.canvas.innerWidth;
    } else {
      this.width = this.args.canvas.width;
    }

    this.coord = new Coord(this.args);
    this.createScale();
  }

  XAxis.prototype.destroy = function() {
    if (this.group) {
      $(this.group).remove();
    }
  };

  XAxis.prototype.render = function() {

    if (!this.group) {
      if (this.args.chart && this.args.chart.group) {
        this.group = this.svg.group(fetch.svgGroup(this.args, this.args.chart.group), this.groupId);
      } else {
        this.group = this.svg.group(this.groupId);
      }
    }

    if (this.args.xAxis.drawLine) {
      this.drawLine();
    }
    if (this.args.xAxis.drawTicks) {
      this.drawTicks();
    }
    if (this.args.xAxis.drawLabels) {
      this.drawLabels();
    }
  };

  XAxis.prototype.drawLine = function() {
    var y = (this.args.chart.height || this.args.canvas.height);

    new Line({
      svg: this.svg,
      className: "x-axis-line",
      parent: this.group,
      x1: 0,
      x2: this.args.chart.width,
      y: y,
      style: this.args.xAxis.line
    });
  };

  XAxis.prototype.drawTicks = function() {
    var tickLength = this.coord.yToFloat('canvas', this.args.xAxis.tick.length) / 2,
      yPos = this.args.chart.height - this.coord.yToFloat('canvas', this.args.xAxis.tick.position),
      i;
    for (i = 0; i <= this.max; i ++) {
      new Line({
        svg: this.svg,
        className: "x-axis-tick",
        parent: this.group,
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
    this.interval = this.width / this.args.data.length;
    coord = this.interval / 2;
    for (i = this.min; i <= this.max; i ++) {
      this.scaleArray[i] = {x: i, coord: utils.roundNumber(coord, 2)};
      coord += this.interval;
    }
  };

  return XAxis;
});