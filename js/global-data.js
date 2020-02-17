'use strict';

(function () {
  window.globalData = {
    userSetup: document.querySelector('.setup'),
    wzColor: {
      coatClr: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
      eyeClr: ['black', 'red', 'blue', 'yellow', 'green'],
      frballClr: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
    },
    getRandomItem: function (arr) {
      var rndNum = Math.floor(Math.random() * arr.length);
      return arr[rndNum];
    }
  };
})();
