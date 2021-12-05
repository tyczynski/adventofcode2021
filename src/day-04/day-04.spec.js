const { getDataInRecords } = require('../utils');
const { bingoWinner } = require('./day-04');

describe('Day 04 - Bingo', () => {
  const data = getDataInRecords('day-04', true);

  it('should find winner board and return correct score for first board', () => {
    const { firstScore } = bingoWinner(data);
    const expectedResult = 4512;

    expect(firstScore).toBe(expectedResult);
  });

  it('should find winner board and return correct score for last board', () => {
    const { lastScore } = bingoWinner(data);
    const expectedResult = 1924;

    expect(lastScore).toBe(expectedResult);
  });
});
