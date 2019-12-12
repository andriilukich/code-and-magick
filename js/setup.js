'use strict';

var USER_DIALOG = document.querySelector('.setup');
var similarListElement = USER_DIALOG.querySelector('.setup-similar-list');
var similarWizardsTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizardsName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorsOfEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var fragment = document.createDocumentFragment();

var randomNumber = function (array) {
  return Math.floor(Math.random() * array.length);
};

var wizards = [
  {
    name: wizardsName[randomNumber(wizardsName)] + ' ' + wizardsSurname[randomNumber(wizardsSurname)],
    coatColor: coatsColor[randomNumber(coatsColor)],
    eyesColor: colorsOfEyes[randomNumber(colorsOfEyes)]
  },
  {
    name: wizardsName[randomNumber(wizardsName)] + ' ' + wizardsSurname[randomNumber(wizardsSurname)],
    coatColor: coatsColor[randomNumber(coatsColor)],
    eyesColor: colorsOfEyes[randomNumber(colorsOfEyes)]
  },
  {
    name: wizardsName[randomNumber(wizardsName)] + ' ' + wizardsSurname[randomNumber(wizardsSurname)],
    coatColor: coatsColor[randomNumber(coatsColor)],
    eyesColor: colorsOfEyes[randomNumber(colorsOfEyes)]
  },
  {
    name: wizardsName[randomNumber(wizardsName)] + ' ' + wizardsSurname[randomNumber(wizardsSurname)],
    coatColor: coatsColor[randomNumber(coatsColor)],
    eyesColor: colorsOfEyes[randomNumber(colorsOfEyes)]
  },
];

USER_DIALOG.querySelector('.setup-similar').classList.remove('hidden');

var renderWizard = function (w) {
  var wizardElement = similarWizardsTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = w.name;
  wizardElement.querySelector('.wizard-coat').style.fill = w.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = w.eyesColor;

  return wizardElement;
};

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

// Events
var AVATAR_CONTAINER = document.querySelector('.setup-open');
var SETUP_CLOSING_BTN = USER_DIALOG.querySelector('.setup-close');

var onAvatarClick = function () {
  USER_DIALOG.classList.remove('hidden');
};
var onClosingBtnClick = function () {
  USER_DIALOG.classList.add('hidden');
};

AVATAR_CONTAINER.addEventListener('click', function (evt) {
  onAvatarClick();
});

SETUP_CLOSING_BTN.addEventListener('click', function (evt) {
  onClosingBtnClick();
});
