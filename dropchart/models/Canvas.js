define('Canvas', ['Coord', 'utils', 'jquery', 'jquerySVG'], function(Coord, utils, $) {

  function Canvas(args) {
    console.log('init Canvas');
    this.args = args;
    this.coord = new Coord(args);
    this.el = $("#" + this.args.canvas.id);
    $(this.el).svg();
    this.svg = $(this.el).children('svg');
    this.setCanvasDimensions();
  }

  Canvas.prototype.setCanvasDimensions = function() {
    this.args.canvas.innerWidth = this.coord.x( this.coord.xToFloat( this.args.canvas.width ) - this.coord.xToFloat( this.args.canvas.margin.left ) - this.coord.xToFloat( this.args.canvas.margin.right ));
    this.args.canvas.innerHeight = this.coord.y( this.coord.yToFloat( this.args.canvas.height ) - this.coord.yToFloat( this.args.canvas.margin.top ) - this.coord.yToFloat( this.args.canvas.margin.bottom ));
    $( this.el )
      .attr( "width", this.coord.x( this.args.canvas.width ) )
      .attr( "height", this.coord.y( this.args.canvas.height ) );
    $( this.svg )
      .attr( "width", this.args.canvas.innerWidth )
      .attr( "height", this.args.canvas.innerHeight );
  };

  return Canvas;
});