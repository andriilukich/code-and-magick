'use strict';

(function () {
  var playerSetup = document.querySelector('.setup-player');
  var coatSetup = playerSetup.querySelector('.wizard-coat');
  var eyeSetup = playerSetup.querySelector('.wizard-eyes');
  var fireballSetup = playerSetup.querySelector('.setup-fireball-wrap');
  var getRandomItem = window.globalData.getRandomItem;

  coatSetup.addEventListener('click', function () {
    coatSetup.style.fill = getRandomItem(window.globalData.wzColor.coatClr);
  });

  eyeSetup.addEventListener('click', function () {
    eyeSetup.style.fill = getRandomItem(window.globalData.wzColor.eyeClr);
  });

  fireballSetup.addEventListener('click', function () {
    fireballSetup.style.backgroundColor = getRandomItem(window.globalData.wzColor.frballClr);
  });
})();
