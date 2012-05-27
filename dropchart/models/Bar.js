define('Bar', ['Rect', 'fetch', 'utils'], function(Rect, fetch, utils) {

  function Bar(obj) {
    console.log('init Bar');
  }

  Bar.prototype.create = function() {

  };

  return Bar;

});
