'use strict';

(function () {

  window.wzsRender = function (wizards) {
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

    let fragment = document.createDocumentFragment();

    similarListElement.innerHTML = '';
    for (let i = 0; i < WZ_CLONES; i++) {
      fragment.appendChild(renderWizards(wizards[i]));
    }

    similarListElement.appendChild(fragment);
    userSetup.querySelector('.setup-similar').classList.remove('hidden');
  };

})();
