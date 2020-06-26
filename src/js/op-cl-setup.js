'use strict';

(function () {
  const setupOpen = document.querySelector('.setup-open');
  const userSetup = document.querySelector('.setup');
  const setupClose = userSetup.querySelector('.setup-close');
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;
  const setupCoords = {
    x: 50,
    y: 80
  };

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
    userSetup.style.left = setupCoords.x + '%';
    userSetup.style.top = setupCoords.y + 'px';
    document.removeEventListener('keydown', onPopupEscPress);
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
})();
