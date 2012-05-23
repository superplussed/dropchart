require.config({
  paths: {
    utils: 'src/lib/utils',
    Axis: 'src/models/Axis',
    Chart: 'src/models/Chart',
    Canvas: 'src/models/Canvas',
    Event: 'src/models/Event',
    Histogram: 'src/models/Histogram',
    DefaultOptions: 'src/models/DefaultOptions',
    Linechart: 'src/models/Linechart',
    Popover: 'src/models/Popover'
  },
  baseUrl: './dropchart/',
  urlArgs: 'uncache=' + (+new Date())
});

require([
  'require', 'chart', 'histogram'
  ], function(require, chart, histogram) {
    debugger;
   return chart;
});