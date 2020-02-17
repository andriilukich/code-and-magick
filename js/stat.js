'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var TEXT_HEIGHT = 16;
  var BARS_GAP = 50;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    ctx.font = '16px "PT Mono"';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + GAP + TEXT_HEIGHT);
    ctx.fillText('Список результатов:', CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + GAP + TEXT_HEIGHT + TEXT_HEIGHT);
    ctx.textAlign = 'left';

    ctx.fillStyle = '#000000';

    var maxTime = getMaxElement(times);

    var playerIndex = players.indexOf('Вы');
    players.splice(playerIndex, 1);
    players.unshift('Вы');
    var playerTime = times[playerIndex];
    times.splice(playerIndex, 1);
    times.unshift(playerTime);

    var barChartPadding = (CLOUD_WIDTH - BAR_WIDTH * players.length) / (players.length + 1);

    for (var i = 0; i < players.length; i++) {
      var nxtBarChartX = CLOUD_X + barChartPadding + (BAR_WIDTH + BARS_GAP) * i;
      var nxtBarChartY = CLOUD_Y + CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT - (times[i] * BAR_HEIGHT) / maxTime;
      var randomNumber = +Math.random().toFixed(1) + 0.1;
      randomNumber = (randomNumber <= 0.4) ? randomNumber * 2 : randomNumber;

      ctx.fillStyle = '#000000';
      ctx.fillText(players[i], nxtBarChartX, CLOUD_Y + CLOUD_HEIGHT - GAP * 2);

      ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255,' + randomNumber + ')';
      ctx.fillRect(nxtBarChartX, nxtBarChartY, BAR_WIDTH, (times[i] * BAR_HEIGHT) / maxTime);

      ctx.fillStyle = '#000000';
      ctx.fillText(Math.floor(times[i]), nxtBarChartX, nxtBarChartY - GAP);
    }
  };
})();
