'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 300;

  window.debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var args = arguments;
      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }
      lastTimeout = setTimeout(function () {
        cb.apply(null, args);
      }, DEBOUNCE_INTERVAL);
    };
  };
}());
