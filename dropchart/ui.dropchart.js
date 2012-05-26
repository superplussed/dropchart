define( "ui.dropchart.js",
  ["order!jquery", 'order!jqueryUI', 'order!jquerySVG', 'Canvas', 'xAxis', 'SvgElement'],
  function ($, jUI, jSVG, Canvas, xAxis, SvgElement) {

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
      addMouseoverAction: true,
      showPopoverOnMouseover: false,
      popoverRemainsOnClick: false,

      canvas: {
        usePerc: true,
        width: "90%",
        height: 200,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 80
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
        labels: defaultLabel
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
      xAxisLabelStrokeColor: '#FFF',
      xAxisLabelStrokeWidth: 1,
      xAxisLabelOpacity: 1,

      chartLabelFontX: 14,
      chartLabelFontY: 20,
      chartLabelFontColor: '#FFF',
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

      marginLeft: 80,
      marginRight: 20,
      marginBottom: 40,
      marginTop: 20,

      dateFormat: '%Y',

      barColor: '#3c421c',
      barStrokeColor: '#84d642',
      barStrokeWidth: 2,
      barOpacity: 1,
      barWidthModifier: 0.85,
      barRadius: 5,

      barRollColor: '#5DCF27',
      barRollStrokeColor: '#84D642',
      barRollStrokeWidth: 2,
      barRollOpacity: 1,
      barMouseoverDuration: 100,
      barMouseoutDuration: 100,

      barBgMouseover: true,
      barBgColor: 'none',
      barBgOpacity: 0,
      barBgRadius: 5,
      barBgHeight: '100%',
      barBgStrokeColor: '#FFFFFF',
      barBgStrokeWidth: 2,

      barBgRollColor: '#FFFFFF',
      barBgRollOpacity: 0.1,
      barBgRollRadius: 5,
      barBgRollStrokeColor: '#FFFFFF',
      barBgRollStrokeWidth: 2
    },
           
    _create: function () {
      this.canvas = new Canvas(this.element, this.options.canvas);
      this.xAxis = new xAxis(this.canvas, this.options.xAxis, this.options.data);
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
  