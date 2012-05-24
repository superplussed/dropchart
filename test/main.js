require.config({
  paths: {
    jquery: './vendor/jquery.1.7.2.min',
    testRunner: './test/testRunner',
    utilsSpec: './test/utils.spec',
    canvasSpec: './test/canvas.spec',
    dimSpec: './test/dim.spec'
  },
  urlArgs: 'uncache=' + (+new Date())
});

define('test', ['utilsSpec', 'canvasSpec', 'dimSpec'], function(utilsSpec, canvasSpec, dimSpec) {
  return {
    name: 'test',
    utilsSpec: utilsSpec,
    canvasSpec: canvasSpec,
    dimSpec: dimSpec
  };
});

//  svgElementSpec: require("./svgElement.spec")