define(['utils.spec'], function(utilsSpec) {
  mocha.setup('bdd');
  utilsSpec.runTests();
  mocha.run();
});