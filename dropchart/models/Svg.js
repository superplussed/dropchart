define('Svg', ['utils'], function(utils) {

  function Svg() {
    console.log("init Svg");
  }

  Svg.prototype.createEl = function(tag, target, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
      el.setAttribute(k, attrs[k]);
    document.getElementById(target).appendChild(el);
  };

  Svg.prototype.createLine = function(tag, target, attrs) {
    attrs = utils.extendObj(attrs, {
      x1: 0,
      y: 0,
      stroke: "#000",
      'stroke-width': 2
    });
    this.createEl('line', target, attrs);
  };

  return Svg;
});