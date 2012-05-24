require.config({
  paths: {
    jquery: './vendor/jquery.1.7.2.min',
    testRunner: './test/testRunner'
  },
  urlArgs: 'uncache=' + (+new Date())
});

define(function(require, exports, module) {
  return {
    utilsSpec: require("./utils.spec"),
    uiDropchartSpec: require("./ui.dropchart.spec")
   
  };
});

//  svgElementSpec: require("./svgElement.spec")