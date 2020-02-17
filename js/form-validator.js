'use strict';

(function () {
  var userNameInput = document.querySelector('.setup-user-name');

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
})();
