require.config({
  paths: {
    jquery: './vendor/jquery.1.7.2.min',
    argsFor: './test/helpers/argsFor',
    stage: './test/helpers/stage',
    testRunner: './test/testRunner',
    utilsSpec: './test/utils.spec',
    canvasSpec: './test/canvas.spec',
    coordSpec: './test/coord.spec',
    histogramSpec: './test/histogram.spec',
    xAxisSpec: './test/xAxis.spec'
  }
  //,urlArgs: 'uncache=' + (+new Date())
});

define('test', ['utilsSpec', 'canvasSpec', 'coordSpec', 'xAxisSpec', 'histogramSpec'],
  function(utilsSpec, canvasSpec, coordSpec, xAxisSpec, histogramSpec) {
  return {
    name: 'test',
    utilsSpec: utilsSpec,
    canvasSpec: canvasSpec,
    coordSpec: coordSpec,
    histogramSpec: histogramSpec,
    xAxisSpec: xAxisSpec
  };
});