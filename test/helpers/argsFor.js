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
        innerWidth: 400,
        innerHeight: 200
      }, this.canvas());
    },
    data: function() {
      return [
        {x: "foo", y: 100},
        {x: "bar", y: 110},
        {x: "baz", y: 180}
      ];
    },
    xAxis: function() {
      return {
        show: true,
        strokeColor: "#000",
        strokeWidth: 2,
        position: "80%"
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
    histogram: function() {
      return {
        bar: {
          color: '#DDDDDD',
          'stroke-color': '#000000',
          'stroke-width': 2,
          opacity: 1,
          radius: 5,
          widthModifier: 1
        },
        data: this.data()
      };
    }
  };
  return argsFor;
});
