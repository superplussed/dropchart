define( "ui.dropchart.js",
  ["order!jquery", 'order!jqueryUI', 'order!jquerySVG', 'Canvas', 'XAxis'],
  function ($, jUI, jSVG, Canvas, XAxis) {

  var defaultFont = {
    color: "#000",
    opacity: 1,
    size: "12px",
    align: "center",
    offsetY: 0,
    offsetX: 0
  };

  var defaultLabel = {
    radius: 0,
    opacity: 1,
    color: "#DDD",
    strokeColor: "#FFF",
    strokeWidth: 2
  };

  $.widget( "ui.dropchart", {

    options: {
      addClickAction: false,
      showPopoverOnMouseover: false,
      popoverRemainsOnClick: false,

      canvas: {
        background: 'grid',
        usePerc: true,
        width: "90%",
        height: 200,
        margin: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
        }
      },
      chart: {
        type: 'histogram',
        useRollover: true,
        rolloverDuration: 100,
        rolloutDuration: 100,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 80
        },
        bar: {
          color: '#3c421c',
          'stroke-color': '#84d642',
          'stroke-width': 2,
          opacity: 1,
          radius: 5,
          widthModifier: 0.85
        },
        barBg: {
          color: 'none',
          'stroke-color': '#FFFFFF',
          'stroke-width': 2,
          opacity: 0,
          radius: 5,
          height: '100%',
          widthModifier: 0.85
        },
        barRoll: {
          color: '#5DCF27',
          'stroke-color': '#84D642',
          'stroke-width': 2,
          opacity: 1,
          radius: 5,
          height: '100%',
          widthModifier: 0.85
        },
        barBgRoll: {
          color: '#FFFFFF',
          'stroke-color': '#FFFFFF',
          'stroke-width': 2,
          opacity: 0.1,
          radius: 5
        }
      },
      xAxis: {
        show: true,
        useCount: true,
        useLabels: true,
        'stroke-color': "#000",
        'stroke-width': 2,
        position: "80%",
        font: defaultFont,
        labels: defaultLabel,
        ticks: {
          opacity: 1,
          strokeColor: "#000",
          strokeWidth: 1,
          length: 10
        }
      },

      showYAxis: true,
      yAxisPosition: 60,
      yAxisNumTicks: 5,
      yAxisOrientation: 'left',

      showXAxisLine: true,
      xAxisUseCount: true,
      xAxisPosition: '83%',

      xAxisFontPosition: '88%',
      xAxisFontSize: 12,
      xAxisFontColor: '#000000',
      xAxisFontOpacity: 0.8,

      showXAxisLabels: true,
      xAxisLabelHeight: '7%',
      xAxisLabelRadius: 3,
      xAxisLabelColor: '#594336',
      xAxisLabelStrokeColor: '#FFFFFF',
      xAxisLabelStrokeWidth: 1,
      xAxisLabelOpacity: 1,

      chartLabelFontX: 14,
      chartLabelFontY: 20,
      chartLabelFontColor: '#FFFFFF',
      chartLabelFontSize: '12px',
      chartLabelFontOpacity: 1,

      chartLabelText: '',
      chartLabelX: '80%',
      chartLabelY: 20,
      chartLabelColor: '#777872',
      chartLabelStrokeColor: '#000',
      chartLabelStrokeWidth: 0,
      chartLabelOpacity: 1,
      chartLabelRadius: 5,
      chartLabelWidth: 145,
      chartLabelHeight: 33,chartWidth: "90%",
      chartHeight: 300,
      usePerc: true,

      popoverY: 40,
      popoverHeight: '48px',
      popoverWidth: '140px',
      popoverMargin: 20,
      popoverRadius: 5,

      dateFormat: '%Y'
    },
           
    _create: function () {
      this.canvas = new Canvas(this.element, this.options.canvas);
      this.xAxis = new XAxis(this.canvas, this.options.xAxis, this.options.data);
    },

           
    destroy: function () {
      $.Widget.prototype.destroy.call( this );
    },

    getOptions: function ( ) {
      return this.options;
    },
            
    _setOption: function ( key, value ) {
      $.Widget.prototype._setOption.apply( this, arguments );
    }
  });
});

// References
// Essential jQuery Plugin Patterns (by James Burke) - http://goo.gl/Pc46s
  