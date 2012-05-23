define(['../dropchart/main', 'jquery'], function(dropchart, $) {
  debugger;
  var chartSpec = {
    runTests: function() {
      $("#histogram")
        .css("display", "block")
        .css("height",  200)
        .css("width", 400);

      describe("Chart", function() {

        beforeEach(function(done){
          var chart = new Chart({
            id: 'histogram',
            marginLeft: 11,
            marginRight: 22,
            marginBottom: 33,
            marginTop: 44
          });
        });

        describe("#boundaries()", function() {

        });

      });
    }
  };

  return chartSpec;
});