'use strict';

(function () {
  window.utils = {
    getRandomItem: function (arr) {
      var rndNum = Math.floor(Math.random() * arr.length);
      return arr[rndNum];
    }
  };
})();
