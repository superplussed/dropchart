require.config({
  paths: {
    jquery: './vendor/jquery.1.7.2.min',
    testRunner: './test/testRunner',
    utilsSpec: './test/utils.spec',
    canvasSpec: './test/canvas.spec',
    coordSpec: './test/coord.spec'
  },
  urlArgs: 'uncache=' + (+new Date())
});

define('test', ['utilsSpec', 'canvasSpec', 'coordSpec'], function(utilsSpec, canvasSpec, coordSpec) {
  return {
    name: 'test',
    utilsSpec: utilsSpec,
    canvasSpec: canvasSpec,
    coordSpec: coordSpec
  };
});

//  svgElementSpec: require("./svgElement.spec")