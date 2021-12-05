const { getDataInRecords } = require('../utils');
const { bingoWinner } = require('./day-04');

const data = getDataInRecords('day-04');
const { firstScore, lastScore } = bingoWinner(data);

console.table({
  'Bingo first winner': firstScore,
  'Bingo last winner': lastScore,
});
