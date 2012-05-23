define(function() {
  var utils = {
    isBlank: function(el) {
      return (!el && el !== 0) || el === '';
    },

    pxToInt: function(px) {
      return (typeof(px) === 'string' ? parseInt(px.substr(0, px.length - 1), 10) : px);
    },

    intToPx: function(val) {
      return (typeof(val) === 'number' ? val + 'px' : val);
    },

    cloneObj: function(obj) {
      if (null === obj || "object" !== typeof obj) return obj;
      var copy = obj.constructor();
      for (var attr in obj) {
          if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
      }
      return copy;
    },

    roundNumber: function(num, dec) {
      return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    },

    isValidNumber: function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },

    sortByName: function(a, b) {
      var aName = a.name.toLowerCase();
      var bName = b.name.toLowerCase();
      return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    },

    getBoundingRect: function(element) {
      if (element) {
        var svg;
        if (typeof(element) === 'string') {
          svg = $(element).is('g, svg, rect, text');
          element = (svg ? d3.select(element) : $(element));
        } else {
          svg = element[0] instanceof Array;
        }
        if (svg) {
          return element.node().getBoundingClientRect();
        } else {
          return {width: $(element).width(), height: $(element).height(), x: $(element).offset().left, y: $(element).offset().top};
        }
      }
    }
  };

  return utils;
});