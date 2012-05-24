require.config({
  paths: {
    jquery: './vendor/jquery.1.7.2.min',
    jquerySVG: './vendor/jquery.svg',
    jqueryUI: './vendor/jquery.ui.1.8.20.custom',
    uiDropchart: './dropchart/ui.dropchart',
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

define( function( require, exports, module ) {
  return {
    dropchart: require( 'uiDropchart' ),
    Canvas: require('Canvas')
  };
});