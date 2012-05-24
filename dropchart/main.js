require.config({
  paths: {
    jquery: './vendor/jquery.1.7.min',
    jquerySvg: './vendor/jquery.svg',
    utils: './dropchart/lib/utils',
    Axis: './dropchart/models/Axis',
    Chart: './dropchart/models/Chart',
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

define(function(require, exports, module) {
  return {
    Chart: require('Chart'),
    SvgElement: require('SvgElement')
  };
});