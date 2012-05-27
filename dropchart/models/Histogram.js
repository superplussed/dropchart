define('Histogram', ['Rect', 'fetch', 'utils'],
  function(Rect, fetch, utils) {

  function Histogram(xAxis, yAxis, args) {
    console.log('init Histogram');
    this.data = args.data;
    this.args = args;
    this.xaxis = xaxis;
    this.yaxis = yaxis;
    this.drawRects();
  }

  Histogram.prototype.drawRects = function() {
    for (var i = 0; i <= xAxis.max; i ++) {
      new Rect({
        svg: this.svg,
        className: "x-axis-tick",
        parent: this.xAxisGroup,
        x: xAxis.scale(0),
        y: 0,
        width: xAxis.interval * this.args.chart.bar.widthModifier,
        height: yAxis.scale(this.data[i]),
        style: this.args.chart.bar
      });
    }
  };

  return Histogram;

});
