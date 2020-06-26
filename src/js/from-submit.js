'use strict';

(function() {
  const userSetup = document.querySelector('.setup');
  const form = document.querySelector('.setup-wizard-form');
  const errorMessEl = document.querySelector('.setup-user__error-message');

  function successHandler() {
    userSetup.classList.add('hidden');
    errorMessEl.textContent = '';
    errorMessEl.style.opacity = 0;
  }

  function errorHandler(errorMessage) {
    errorMessEl.textContent = errorMessage;
    errorMessEl.style.opacity = 1;
  }

  form.addEventListener('submit', (evt) => {
    window.backend.upload(new FormData(form), successHandler, errorHandler);
    evt.preventDefault();
  });
})();
