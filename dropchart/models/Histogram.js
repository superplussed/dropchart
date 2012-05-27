define('Histogram', ['Rect', 'xAxis', 'yAxis', 'fetch', 'utils'],
  function(Rect, xAxis, yAxis, fetch, utils) {

  function Histogram(args) {
    console.log('init Histogram');
    this.data = args.data;
    this.args = args;
    this.drawRects();
  }

  Histogram.prototype.drawRects = function() {
    
    var i;
    for (i = 0; i <= xAxis.max; i ++) {
      new Rect({
        svg: this.svg,
        className: "x-axis-tick",
        parent: this.xAxisGroup,
        x: '',
        y: '',
        width: '',
        height: '',
        style: this.args.chart.bar
      });
    }
  };

  return Histogram;

});
