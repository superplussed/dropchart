define(['jquery'], function(jquery) {
  var argsFor = {
    canvas: function() {
      return {
        id: "histogram",
        usePerc: false,
        width: 400,
        height: 200,
        margin: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
        }
      };
    },
    canvasWithInner: function() {
      return $.extend({
        innerWidth: 380,
        innerHeight: 180
      }, this.canvas());
    },
    canvasWithInnerNoMargin: function() {
      return $.extend({
        innerWidth: 400,
        innerHeight: 200
      }, this.canvas());
    },
    data: function() {
      return [
        {x: "foo", y: 180},
        {x: "bar", y: 110},
        {x: "baz", y: 100}
      ];
    },
    xAxis: function() {
      return {
        show: true,
        strokeColor: "#000",
        strokeWidth: 2,
        position: "90%"
      };
    },
    yAxis: function() {
      return {
        show: true,
        strokeColor: "#000",
        strokeWidth: 2,
        position: "5%"
      };
    },
    xAxisWithTicks: function() {
      return $.extend({
        useTicks: true,
        tick: {
          opacity: 1,
          strokeColor: "#000",
          strokeWidth: 1,
          length: 10
        }
      }, this.xAxis());
    },
    yAxisWithTicks: function() {
      return $.extend({
        useTicks: true,
        tick: {
          opacity: 1,
          strokeColor: "#000",
          strokeWidth: 1,
          length: 10,
          num: 4
        }
      }, this.yAxis());
    },
    histogram: function() {
      return {
        chart: {
          bar: {
            color: '#DDDDDD',
            strokeColor: '#000000',
            strokeWidth: 2,
            opacity: 1,
            radius: 5,
            widthModifier: 1
          }
        },
        data: this.data(),
        canvas: this.canvasWithInner(),
        xAxis: this.xAxisWithTicks(),
        yAxis: this.yAxisWithTicks()
      };
    }
  };
  return argsFor;
});
