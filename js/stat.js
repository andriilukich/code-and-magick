'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - TEXT_WIDTH - GAP - GAP;

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

//   ctx.font = '48px serif';
// ctx.textAlign = 'left';
// ctx.fillText('Hello world', 0, 100);
// ctx.fillText('Hello world', 0, 120);
  ctx.font = '16px PTMono';
  ctx.fillText('Ура вы победили!', 0, 100);
  ctx.fillText('Список результатов:', 0 120);

  ctx.fillStyle = '#000000';

  var maxTime = getMaxElement(times);

  // var playerIndex = 0;
  // var playerName = 'Вы';

  // var players = ['Вы', 'Иван', 'Юлия', 'Keks'];

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }

  // ctx.fillText(playerName, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * playerIndex);
  // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * playerIndex, barWidth, BAR_HEIGHT);

  // playerIndex = 1;
  // playerName = 'Иван';

  // ctx.fillText(playerName, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * playerIndex);
  // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * playerIndex, barWidth, BAR_HEIGHT);

  // playerIndex = 1;
  // playerName = 'Юлия';

  // ctx.fillText(playerName, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * playerIndex);
  // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * playerIndex, barWidth, BAR_HEIGHT);
};
