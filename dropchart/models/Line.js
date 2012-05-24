Svg.prototype.createLine = function(tag, target, attrs) {
    attrs = utils.extendObj(attrs, {
      x1: 0,
      y1: 0,
      stroke: "#000",
      'stroke-width': 2
    });
    this.createEl('line', target, attrs);
  };