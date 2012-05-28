define('Histogram', ['Rect', 'XAxis', 'YAxis', 'fetch', 'utils'],
  function(Rect, XAxis, YAxis, fetch, utils) {

  function Histogram(args) {
    console.log('init Histogram');
    var groupArgs = {},
      margin;
    this.data = args.data;
    this.args = args;
    this.svg = fetch.svg(args);

    if (this.args.chart.margin) {
      margin = $.extend({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }, this.args.chart.margin);
      this.width = this.args.canvas.innerWidth - margin.left - margin.right;
      this.height = this.args.canvas.innerHeight - margin.top - margin.bottom;
      if (margin.left && margin.top) {
        groupArgs.transform = "translate(" + margin.left + "," + margin.top + ")";
      }
    } else {
      this.width = this.args.canvas.innerWidth;
      this.height = this.args.canvas.innerHeight;
    }
    args.chart.width = this.width;
    args.chart.height = this.height;

    this.xAxis = new XAxis(args);
    this.yAxis = new YAxis(args);

    this.group = this.svg.group("histogram", groupArgs);
    this.drawRects();
  }

  Histogram.prototype.drawRects = function() {
    for (var i = 0; i <= this.xAxis.max; i ++) {
      var height = this.yAxis.scale(this.data[i].y);
      new Rect({
        svg: this.svg,
        className: "histogram-bar",
        parent: this.group,
        x: utils.roundNumber(this.xAxis.scale(i) - (this.xAxis.interval / 2), 2),
        y: utils.roundNumber(this.height - height, 2),
        width: utils.roundNumber(this.xAxis.interval * this.args.chart.bar.widthModifier, 2),
        height: height,
        style: this.args.chart.bar
      });
    }
  };

  Histogram.prototype.destroy = function() {
    if (this.group) {
      this.xAxis.destroy();
      this.yAxis.destroy();
      $(this.group).remove();
    }
  };

  return Histogram;

});
