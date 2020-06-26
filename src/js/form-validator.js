'use strict';

(function () {
  const userNameInput = document.querySelector('.setup-user-name');

  const toggleErrMessage = function (message) {
    const errEl = document.querySelector('.setup-user__error-message');
    errEl.textContent = message;
    errEl.style.opacity = message ? 1 : 0;
  };

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
     if (target.value.length < 2) {
      target.setCustomValidity('Wizard\'s name must be at least two characters');
    } else {
      target.setCustomValidity('');
    }

    toggleErrMessage(target.validationMessage);
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Wizard\'s name must be at least two characters');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Wizard\'s name must be maximum twenty five characters');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Required field');
    } else {
      userNameInput.setCustomValidity('');
    }

    toggleErrMessage(userNameInput.validationMessage);
  });

})();
