Coord.prototype.createScale = function(data) {
    var i;
    this.xScale = [];
    this.yScale = [];
    this.minX = 0;
    this.maxX = this.data.length - 1;
    this.minY = utils.getMinFromArrayOfObj(this.data, 'y');
    this.maxY = utils.getMaxFromArrayOfObj(this.data, 'y');
    this.xInterval = self.xToFloat(this.options.width) / this.maxX - 1;
    this.yInterval = self.xToFloat(this.options.height) / this.yTicks - 1;
    for (i = this.minX; i <= this.maxX; i ++) {
      this.xScale[i] = {x: i, coord: 0};
    }
  };