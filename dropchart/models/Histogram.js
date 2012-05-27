define('Histogram', ['Rect', 'fetch', 'utils'],
  function(Rect, fetch, utils) {

  function Histogram(xAxis, yAxis, args) {
    console.log('init Histogram');
    this.data = args.data;
    this.args = args;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.svg = fetch.svg(args);
    this.group = this.svg.group("histogram");
    this.drawRects();
  }

  Histogram.prototype.drawRects = function() {
    for (var i = 0; i <= this.xAxis.max; i ++) {
      var height = this.yAxis.scale(this.data[i].y);
      new Rect({
        svg: this.svg,
        className: "histogram-bar",
        parent: this.group,
        x: this.xAxis.scale(i) - (this.xAxis.interval / 2),
        y: this.args.canvas.innerHeight - height,
        width: this.xAxis.interval * this.args.chart.bar.widthModifier,
        height: height,
        style: this.args.chart.bar
      });
    }
  };

  return Histogram;

});
