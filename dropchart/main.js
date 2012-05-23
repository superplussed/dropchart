require.config({
  paths: {
    utils: './dropchart/lib/utils',
    Axis: './dropchart/models/Axis',
    Chart: './dropchart/models/Chart',
    Svg: './dropchart/models/Svg',
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
    Svg: require('Svg')
  };
});