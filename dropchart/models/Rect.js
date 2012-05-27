define('Rect', ['jquery', 'jquerySVG'],
  function($) {

  function Rect(args) {
    args.svg.rect(args.parent, args.x, args.y, args.width, args.height, args.style.radius, args.style.radius,
      {
        'class': args.className,
        stroke: args.style.strokeColor,
        'stroke-width': args.style.strokeWidth,
        opacity: args.style.opacity,
        'shape-rendering': 'crispedges'
      });
  }

  return Rect;
});