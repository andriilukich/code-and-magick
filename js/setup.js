'use strict';

var userSetup = document.querySelector('.setup');
var similarListElement = userSetup.querySelector('.setup-similar-list');
var similarWizardsTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizardsName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorsOfEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_MAX = 4;
var fragment = document.createDocumentFragment();

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomItem = function (arr) {
  return arr[getRandomNumber(0, arr.length)];
};

var creatWizard = function () {
  var newWizard = {
    name: getRandomItem(wizardsName) + ' ' + getRandomItem(wizardsSurname),
    coatColor: getRandomItem(coatsColor),
    eyesColor: getRandomItem(colorsOfEyes)
  };
  return newWizard;
};

var wizards = [];

for (var wiz = 0; wiz < WIZARDS_MAX; wiz++) {
  wizards.push(creatWizard());
}

userSetup.querySelector('.setup-similar').classList.remove('hidden');

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
var setupOpen = document.querySelector('.setup-open');
var setupClose = userSetup.querySelector('.setup-close');
var userNameInput = userSetup.querySelector('.setup-user-name');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  userSetup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userSetup.classList.add('hidden');
  document.removeEventLIstener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Wizard\'s name must be at least two characters');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Wizard\'s name must be maximum twenty five characters');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Required field');
  } else {
    userNameInput.setCustomValidity(' ');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Wizard\'s name must be at least two characters');
  } else {
    target.setCustomValidity(' ');
  }
});
