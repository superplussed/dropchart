define('Histogram', ['Bar', 'xAxis', 'fetch', 'utils'], function(Bar, xAxis, fetch, utils) {

  function Histogram(args) {
    console.log('init Histogram');
    this.data = args.data;
    this.args = args;
    this.drawBars();
  }

  Histogram.prototype.drawBars = function() {
    
    var yPos = this.coord.yToFloat(this.args.xAxis.position),
      i;
    for (i = 0; i <= xAxis.max; i ++) {
      new Line({
        svg: this.svg,
        className: "x-axis-tick",
        parent: this.xAxisGroup,
        x: this.scale[i].coord,
        y1: yPos + tickLength,
        y2: yPos - tickLength,
        style: this.args.xAxis.ticks
      });
    }
  };

  return Histogram;

});
