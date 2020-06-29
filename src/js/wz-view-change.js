'use strict';

(function () {
  const WZ_COLOR = {
    coatClr: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyeClr: ['black', 'red', 'blue', 'yellow', 'green'],
    frballClr: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  var playerSetup = document.querySelector('.setup-player');
  var coatSetup = playerSetup.querySelector('.wizard-coat');
  var eyeSetup = playerSetup.querySelector('.wizard-eyes');
  var fireballSetup = playerSetup.querySelector('.setup-fireball-wrap');
  var getRandomItem = window.utils.getRandomItem;

  var randomColor;
  coatSetup.addEventListener('click', function () {
    randomColor = getRandomItem(WZ_COLOR.coatClr);
    coatSetup.style.fill = randomColor;
    window.wizard.onCoatChange(randomColor);
  });

  eyeSetup.addEventListener('click', function () {
    randomColor = getRandomItem(WZ_COLOR.eyeClr);
    eyeSetup.style.fill = randomColor;
    window.wizard.onEyeChange(randomColor);
  });

  fireballSetup.addEventListener('click', function () {
    randomColor = getRandomItem(WZ_COLOR.frballClr);
    fireballSetup.style.backgroundColor = randomColor;
    window.wizard.onFireBChange(randomColor);
  });
})();
