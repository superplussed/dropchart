define('Canvas', ['Coord', 'utils', 'jquery', 'jquerySVG'], function(Coord, utils, $) {

  function Canvas(args) {
    console.log('init Canvas');
    this.args = args;
    this.coord = new Coord(args);
    this.el = $("#" + this.args.canvas.id);
    $(this.el).svg();
    this.svg = $(this.el).svg('get');
    this.setCanvasDimensions();
  }

  Canvas.prototype.setCanvasDimensions = function() {
    var rootId = this.args.canvas.id + "-root";
    this.args.canvas.innerWidth = this.coord.x( this.coord.xToFloat( this.args.canvas.width ) - this.coord.xToFloat( this.args.canvas.margin.left ) - this.coord.xToFloat( this.args.canvas.margin.right ));
    this.args.canvas.innerHeight = this.coord.y( this.coord.yToFloat( this.args.canvas.height ) - this.coord.yToFloat( this.args.canvas.margin.top ) - this.coord.yToFloat( this.args.canvas.margin.bottom ));
    $( this.el )
      .css( "width", this.coord.x( this.args.canvas.width ) )
      .css( "height", this.coord.y( this.args.canvas.height ) );

    $(this.el).find('svg')
      .attr("width", this.args.canvas.innerWidth)
      .attr("height", this.args.canvas.innerHeight);

    if (!$("#" + rootId).length) {
      this.root = this.svg.group($('svg'), rootId);
    }

    $(this.root).attr("transform", "translate(" + (this.coord.xToFloat(this.args.canvas.width) - this.coord.xToFloat(this.args.canvas.innerWidth)) + ", " + (this.coord.yToFloat(this.args.canvas.height) - this.coord.yToFloat(this.args.canvas.innerHeight)) + ")");
  };

  return Canvas;
});