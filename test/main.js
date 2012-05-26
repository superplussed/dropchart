require.config({
  paths: {
    jquery: './vendor/jquery.1.7.2.min',
    testRunner: './test/testRunner',
    utilsSpec: './test/utils.spec',
    canvasSpec: './test/canvas.spec',
    coordSpec: './test/coord.spec',
    xAxisSpec: './test/xAxis.spec'
  }
  //,urlArgs: 'uncache=' + (+new Date())
});

define('test', ['utilsSpec', 'canvasSpec', 'coordSpec', 'xAxisSpec'],
  function(utilsSpec, canvasSpec, coordSpec, xAxisSpec) {
  return {
    name: 'test',
    utilsSpec: utilsSpec,
    canvasSpec: canvasSpec,
    coordSpec: coordSpec,
    xAxisSpec: xAxisSpec
  };
});