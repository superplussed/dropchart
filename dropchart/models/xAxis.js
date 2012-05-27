define('xAxis', ['Coord', 'Line', 'utils', 'jquery', 'jquerySVG'],
  function(Coord, Line, utils, $) {

  function xAxis(args) {
    console.log('init xAxis');

    this.args = args;
    this.data = args.data;
    this.svg = $('#' + this.args.canvas.id + "-inner").svg('get');
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

  xAxis.prototype.destroy = function() {
    if (this.xAxisGroup) {
      $(this.xAxisGroup).remove();
    }
  };

  xAxis.prototype.drawLine = function() {
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

  xAxis.prototype.drawTicks = function() {
    var tickLength = this.coord.yToFloat(this.args.xAxis.tick.length) / 2,
      yPos = this.coord.yToFloat(this.args.xAxis.position),
      i;
    for (i = 0; i <= this.max; i ++) {
      new Line({
        svg: this.svg,
        className: "x-axis-tick",
        parent: this.xAxisGroup,
        x: this.scale[i].coord,
        y1: yPos + tickLength,
        y2: yPos - tickLength,
        style: this.args.xAxis.tick
      });
    }
  };

  xAxis.prototype.createScale = function() {
    var i,
      coord;
    this.scale = [];
    this.min = 0;
    this.max = this.data.length - 1;
    this.interval = this.args.canvas.innerWidth / (this.args.data.length);
    coord = this.interval / 2;
    for (i = this.min; i <= this.max; i ++) {
      this.scale[i] = {x: i, coord: utils.roundNumber(coord, 2)};
      coord += this.interval;
    }
  };

  return xAxis;
});