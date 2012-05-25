define('Canvas', ['Coord', 'utils', 'jquery', 'jquerySVG'], function(Coord, utils, $) {

  function Canvas(el, options) {
    console.log('init Canvas');

    this.el = el;
    this.options = options;
    this.coord = new Coord(options);
    $(el).svg();
    this.svg = $(this.el).children('svg');
    this.setCanvasDimensions();
  }

  Canvas.prototype.setCanvasDimensions = function() {
    $( this.el )
      .attr( "width", this.coord.x( this.options.width ) )
      .attr( "height", this.coord.y( this.options.height ) );
    $( this.svg )
      .attr( "width", this.coord.x( this.coord.xToFloat( this.options.width ) - this.coord.xToFloat( this.options.margin.left ) - this.coord.xToFloat( this.options.margin.right )))
      .attr( "height", this.coord.y( this.coord.yToFloat( this.options.height ) - this.coord.yToFloat( this.options.margin.top ) - this.coord.yToFloat( this.options.margin.bottom )));
  };

  return Canvas;
});