define('xAxis', ['Coord', 'utils', 'jquery', 'jquerySVG'], function(Coord, utils, $) {

  function xAxis(args) {
    console.log('init xAxis');

    this.args = args;
    this.data = args.data;
    this.el = $("#" + args.canvas.id);
    this.svg = $(this.el).svg('get');
    this.coord = new Coord(this.args);
    if (this.args.xAxis.show) {
     this.drawLine();
    }
  }

  xAxis.prototype.drawLine = function() {
    this.svg.line(0, this.args.xAxis.position, "100%", this.args.xAxis.position,
      {
        stroke: this.args.xAxis.strokeColor,
        'stroke-width': this.args.xAxis.strokeWidth
      });
  };

  xAxis.prototype.createScale = function(data) {
    var i,
      coord = 0;
    this.scale = [];
    this.min = 0;
    this.max = this.data.length - 1;
    this.interval = this.coord.xToFloat(this.args.canvas.width) / this.max - 1;
    for (i = this.minX; i <= this.maxX; i ++) {
      this.scale[i] = {x: i, coord: coord};
      coord += this.interval;
    }
  };

  return xAxis;
});