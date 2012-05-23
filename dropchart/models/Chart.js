define('Chart', ['DefaultOptions', 'Canvas', 'Axis', 'Popover', 'Event', 'utils'],
  function(DefaultOptions, Canvas, Axis, Popover, Event, utils) {

  function Chart(obj) {
    console.log('init Chart');
    this.data = obj.data;
    delete obj.data;
    /*
    this.defaultOptions = this.defaultHistogramOptions;
    this.options = $.extend(utils.cloneObj(this.defaultOptions), obj);
    var canvas = new Canvas(this.options);
    $.extend(Chart.prototype, new Popover());
    $.extend(Chart.prototype, new Event());
    $.extend(Chart.prototype, new Axis(canvas)); */
  }

  return Chart;
});
