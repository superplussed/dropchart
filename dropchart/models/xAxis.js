define('xAxis', ['Coord', 'utils', 'jquery', 'jquerySVG'], function(Coord, utils, $) {

  function xAxis(args) {
    console.log('init xAxis');

    this.args = args;
    this.data = args.data;
    this.el = $("#" + args.canvas.id);
    this.root = $(this.el + "-root").svg('get');
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

  xAxis.prototype.drawLine = function() {
    this.root.line(0, this.args.xAxis.position, "100%", this.args.xAxis.position,
      {
        'class': "x-axis-line",
        stroke: this.args.xAxis.strokeColor,
        'stroke-width': this.args.xAxis.strokeWidth,
        opacity: this.args.xAxis.opacity
      });
  };

  xAxis.prototype.drawTicks = function() {
    var tickLength = this.coord.yToFloat(this.args.xAxis.ticks.length) / 2,
      yPos = this.coord.yToFloat(this.args.xAxis.position),
      i;
    for (i = 0; i <= this.max; i ++) {
      this.root.line(this.scale[i].coord,  yPos + tickLength, this.scale[i].coord, yPos - tickLength,
      {
        'class': "x-axis-tick",
        stroke: this.args.xAxis.ticks.strokeColor,
        'stroke-width': this.args.xAxis.ticks.strokeWidth,
        opacity: this.args.xAxis.ticks.opacity
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