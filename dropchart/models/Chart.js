define('Chart', ['jquery', 'DefaultOptions', 'Canvas', 'Axis', 'Popover', 'Event', 'utils'],
  function($, DefaultOptions, Canvas, Axis, Popover, Event, utils) {

  $.extend(Chart.prototype, new DefaultOptions());

  function Chart(obj) {
    console.log('init Chart');
    this.data = obj.data;
    delete obj.data;
    this.options = $.extend(utils.cloneObj(this.defaultChartOptions), obj);
    this.canvas = new Canvas(options);
  }

  return Chart;
});
