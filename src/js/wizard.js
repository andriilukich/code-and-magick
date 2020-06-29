'use strict';

(function () {
  var coatColor;
  var eyeColor;
  var fireballColor;
  let wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    } else if (wizard.colorEyes === eyeColor) {
      rank += 2;
    } else if (wizard.colorFireball === fireballColor) {
      rank += 1;
    }
    return rank;
  };

  var updateWzs = function () {
    window.wzsRender(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  window.wizard.onEyeChange = window.debounce(function (color) {
    eyeColor = color;
    updateWzs();
  });
  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWzs();
  });
  window.wizard.onFireBChange = window.debounce(function (color) {
    fireballColor = color;
    updateWzs();
  });

  function successHandler(data) {
    wizards = data;
    updateWzs();
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
}());
