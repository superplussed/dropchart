define('Canvas', ['Dim', 'utils', 'jquery', 'jquerySVG'], function(Dim, utils, $) {

  function Canvas(el, options) {
    console.log('init Canvas');
    this.el = el;
    this.options = $.extend(options, this.defaultOptions);
    this.dim = new Dim(options);
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
    $( this.el )
      .attr( "width", this.dim.x( this.options.width ) )
      .attr( "height", this.dim.y( this.options.height ) );
    $( this.svg )
      .attr( "width", this.dim.x( this.options.width - this.options.margin.left - this.options.margin.right ))
      .attr( "height", this.dim.y( this.options.height - this.options.margin.top - this.options.margin.bottom ));
  };

  return Canvas;
});