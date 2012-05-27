define(['jquery'], function(jquery) {
  var argsFor = {
    canvas: function() {
      return {
        id: "histogram",
        userPerc: true,
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
        ticks: {
          opacity: 1,
          strokeColor: "#000",
          strokeWidth: 1,
          length: 10
        }
      }, this.xAxis());
    }
  };
  return argsFor;
});
