define(['jquery', 'argsFor', 'dropchart'], function($, argsFor, dropchart) {
  var stub = {
    xAxis: function() {
      return new dropchart.XAxis({
        canvas: argsFor.canvas(),
        xAxis: argsFor.xAxis(),
        data: argsFor.data()
      });
    },
    yAxis: function() {
      return new dropchart.YAxis({
        canvas: argsFor.canvas(),
        yAxis: argsFor.yAxis(),
        data: argsFor.data()
      });
    },
    canvas: function() {
      return new dropchart.Canvas({
        canvas: argsFor.canvas(),
        data: argsFor.data()
      });
    }
  };
  return stub;
});

