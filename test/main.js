require.config({
  paths: {
    jquery: './vendor/jquery.1.7.2.min',
    testRunner: './test/testRunner',
    utilsSpec: './test/utils.spec',
    canvasSpec: './test/canvas.spec'
  },
  urlArgs: 'uncache=' + (+new Date())
});

define('test', ['utilsSpec', 'canvasSpec'], function(utilsSpec, canvasSpec) {
  return {
    name: 'test',
    utilsSpec: utilsSpec,
    canvasSpec: canvasSpec
  };
});

//  svgElementSpec: require("./svgElement.spec")