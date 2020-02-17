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

  (function (wzAr) {
    var fragment = document.createDocumentFragment();

    for (var j = 0; j < wzAr.length; j++) {
      var wizardElement = similarWizardsTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wzAr[j].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wzAr[j].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wzAr[j].eyesColor;

      fragment.appendChild(wizardElement);
    }
    similarListElement.appendChild(fragment);
  })();
  // var rndrWz = function (wzAr) {
  //   var fragment = document.createDocumentFragment();

  //   for (var i = 0; i < wzAr.length; i++) {
  //     var wizardElement = similarWizardsTemplate.cloneNode(true);

  //     wizardElement.querySelector('.setup-similar-label').textContent = wzAr[i].name;
  //     wizardElement.querySelector('.wizard-coat').style.fill = wzAr[i].coatColor;
  //     wizardElement.querySelector('.wizard-eyes').style.fill = wzAr[i].eyesColor;

  //     fragment.appendChild(wizardElement);
  //   }
  //   similarListElement.appendChild(fragment);
  // };

  // rndrWz(wizards);
})();
