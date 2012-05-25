define('Canvas', ['Coord', 'utils', 'jquery', 'jquerySVG'], function(Coord, utils, $) {

  function Canvas(el, options) {
    console.log('init Canvas');
    this.el = el;
    this.options = $.extend(options, this.defaultOptions);
    this.coord = new Coord(options);
    this.svg = $(el).svg();
    this.setCanvasDimensions();
  }

  Canvas.prototype.defaultOptions = {
    width: "90%",
    height: 200,
    margin: {
      top: 20,
      right: 20,
      bottom: 40,
      left: 80
    }
  };

  Canvas.prototype.setCanvasDimensions = function() {
    debugger;
    $( this.el )
      .attr( "width", this.coord.x( this.options.width ) )
      .attr( "height", this.coord.y( this.options.height ) );
    $( this.svg )
      .attr( "width", this.coord.x( this.options.width - this.options.margin.left - this.options.margin.right ))
      .attr( "height", this.coord.y( this.options.height - this.options.margin.top - this.options.margin.bottom ));
  };

  return Canvas;
});