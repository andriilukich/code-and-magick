'use strict';

(function () {
  var userSetup = window.globalData.userSetup;
  var similarListElement = userSetup.querySelector('.setup-similar-list');
  var similarWizardsTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wzName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wzSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WZ_CLONES = 4;
  var getRandomItem = window.globalData.getRandomItem;

  var creatWizard = function () {
    var newWizard = {
      name: getRandomItem(wzName) + ' ' + getRandomItem(wzSurname),
      coatColor: getRandomItem(window.globalData.wzColor.coatClr),
      eyesColor: getRandomItem(window.globalData.wzColor.eyeClr)
    };

    return newWizard;
  };

  var wizards = [];

  for (var i = 0; i < WZ_CLONES; i++) {
    wizards.push(creatWizard());
  }

  userSetup.querySelector('.setup-similar').classList.remove('hidden');

  var fragment = document.createDocumentFragment();

  var renderWizard = function (wzNum) {
    var wizardElement = similarWizardsTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wzNum.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wzNum.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wzNum.eyesColor;

    return wizardElement;
  };

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
})();
