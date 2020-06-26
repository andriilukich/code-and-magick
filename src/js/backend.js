'use strict';

(function () {
  const URL = 'https://javascript.pages.academy/code-and-magick';
  window.backend = {
    upload: function (data, onSuccess, onError) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.onload = () => {
        let err = null;
        switch (xhr.status) {
          case 200:
            onSuccess(xhr.response);
            break;
          case 400:
            err = 'Неверный запрос';
            break;
          case 401:
            err = 'Пользователь не авторизован';
            break;
          case 404:
            err = 'Ничего не найдено';
            break;
          default:
            err = `Статус ответа: ${xhr.status} : ${xhr.statusText}. Повторите отправку позже.`;
            break;
        }

        if (err) {
          onError(err);
        }
      };

      xhr.onerror = () => onError(`Произошла ошибка соединения. Повторите отправку позже.`);
      xhr.ontimeout = () => onError(`Отправка данных не успела выполниться за время ${xhr.timeout / 1000} сек. Повторите отправку позже.`);
      xhr.open('POST', URL);
      xhr.send(data);
    },
    download: function (onSuccess, onError) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.onload = () => {
        let err = null;
        switch (xhr.status) {
          case 200:
            onSuccess(xhr.response);
            break;
          case 400:
            err = 'Неверный запрос';
            break;
          case 401:
            err = 'Пользователь не авторизован';
            break;
          case 404:
            err = 'Ничего не найдено';
            break;
          default:
            err = `Статус ответа: ${xhr.status} : ${xhr.statusText}. Повторите отправку позже.`;
            break;
        }

        if (err) {
          onError(err);
        }
      };

      xhr.onerror = () => onError('Произошла ошибка соединения. Повторите запрос позже.');
      xhr.ontimeout = () => onError(`Запрос не успел выполниться за время ${xhr.timeout / 1000} сек. Повторите запрос позже.`);
      xhr.open('GET', URL + '/data');
      xhr.send();
    }
  };
}());
