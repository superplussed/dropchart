define('xAxis', ['utils', 'jquery', 'jquerySVG'], function(utils, $) {

  function xAxis(id, options) {
    console.log('init xAxis');

    console.log('init xAxis');
    this.options = options;
    this.svg = $(id).svg('get');
    if (this.options.show) {
      this.svg.line(0, options.position, "100%", options.position,
      {stroke: options.strokeColor, 'stroke-width': options.strokeWidth});
    }
  }

  return xAxis;
});