define(['utils.spec', 'chart.spec'], function(utilsSpec, chartSpec) {
  mocha.setup('bdd');
  utilsSpec.runTests();
  chartSpec.runTests();
  mocha.run();
});