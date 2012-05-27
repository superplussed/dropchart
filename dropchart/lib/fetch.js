define(['jquery', 'jquerySVG'], function($) {
  var fetch = {

    elOrFalse: function(el) {
      return (el.length > 0 ? el : false);
    },

    container: function(args) {
      return this.elOrFalse($("#" + args.canvas.id));
    },

    innerContainer: function(args) {
      return this.elOrFalse($("#" + args.canvas.id + "-inner"));
    },

    svg: function(args) {
      return this.elOrFalse($(this.container(args)).find('svg').svg('get'));
    }
  };
  return fetch;
});
