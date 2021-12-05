const { getDataInRecords } = require('../utils');
const { getOverlappingLines } = require('./day-05');

describe('Day 5: Hydrothermal Venture', () => {
  const data = getDataInRecords('day-05', true);

  it('should return correct amount of the number of points where at least two lines overlap', () => {
    const result = getOverlappingLines(data);
    const expectedResult = 5;
    expect(result).toBe(expectedResult);
  });
});
// 4728
// 17717
