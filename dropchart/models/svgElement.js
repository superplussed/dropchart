define('SvgElement', ['utils', 'jquery', 'jquerySVG'], function(utils, $) {

  function SvgElement() {
    console.log("init SvgElement");
  }

  SvgElement.prototype.remove = function() {
    delete this.parentNode.childNodes;
  };

  return SvgElement;
});