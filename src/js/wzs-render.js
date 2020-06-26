'use strict';

(function () {
  const userSetup = document.querySelector('.setup');
  const WZ_CLONES = 4;
  const similarListElement = userSetup.querySelector('.setup-similar-list');
  const similarWizardsTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  function renderWizards(wizard) {
    let wizardElement = similarWizardsTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  function successHandler(wizards) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < WZ_CLONES; i++) {
      fragment.appendChild(renderWizards(wizards[i]));
    }

    similarListElement.appendChild(fragment);
    userSetup.querySelector('.setup-similar').classList.remove('hidden');
  }

  function errorHandler(errorMessage) {
    let node = document.createElement('div');

    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px;';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.backend.download(successHandler, errorHandler);
})();
