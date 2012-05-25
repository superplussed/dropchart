require.config({
  paths: {
    jquery: './vendor/jquery.1.7.2.min',
    jquerySVG: './vendor/jquery.svg',
    jqueryUI: './vendor/jquery.ui.1.8.20.custom',
    uiDropchart: './dropchart/ui.dropchart',
    utils: './dropchart/lib/utils',
    Axis: './dropchart/models/Axis',
    Scale: './dropchart/models/Scale',
    xAxis: './dropchart/models/xAxis',
    yAxis: './dropchart/models/yAxis',
    Chart: './dropchart/models/Chart',
    Coord: './dropchart/models/Coord',
    SvgElement: './dropchart/models/SvgElement',
    Canvas: './dropchart/models/Canvas',
    Event: './dropchart/models/Event',
    Histogram: './dropchart/models/Histogram',
    DefaultOptions: './dropchart/models/DefaultOptions',
    Linechart: './dropchart/models/Linechart',
    Popover: './dropchart/models/Popover',
    require: '../vendor/require'
  },
  urlArgs: 'uncache=' + (+new Date())
});

define('dropchart', ['order!jquery', 'order!jquerySVG', 'uiDropchart', 'Canvas', 'Coord', 'xAxis', 'Scale'],
  function($, jsSVG, uiDropchart, Canvas, Coord, xAxis, Scale) {
  return {
    name: 'dropchart',
    dropchart: uiDropchart,
    Canvas: Canvas,
    Coord: Coord,
    xAxis: xAxis,
    Scale: Scale
  };
});