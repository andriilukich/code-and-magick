'use strict';

(function () {
  var userSetup = document.querySelector('.setup');
  var userAvatarEl = userSetup.querySelector('.upload');

  userAvatarEl.addEventListener('mousedown', function (downEvt) {
    downEvt.preventDefault();
    var draggable = false;

    var startCoords = {
      x: downEvt.clientX,
      y: downEvt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      draggable = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userSetup.style.left = (userSetup.offsetLeft - shift.x) + 'px';
      userSetup.style.top = (userSetup.offsetTop - shift.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (draggable) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          userAvatarEl.removeEventListener('click', onClickPreventDefault);
        };

        userAvatarEl.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
