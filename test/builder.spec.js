define(
  ['jquery', 'dropchart', 'argsFor'],
  function($, dropchart, argsFor) {
  
  var should = chai.should();
  var builderSpec = {

    run: function() {
      describe('Builder', function() {

        describe('#initialize', function() {

          it ('should create the chart', function() {
            console.log("jhi");
            new dropchart.Builder({
              data: argsFor.data()
            });
            $("#histogram").should.have('svg');
            $("#histogram").should.have('g');

          });

        });

      });

    }

  };

  return builderSpec;

});


      