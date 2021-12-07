const { getData } = require('../utils');
const { getFuelToAlignCrabs } = require('./day-07');

describe('Day 7: The Treachery of Whales', () => {
  const data = getData('day-07', true);

  it('should return correct amount of the spend fuel', () => {
    const result = getFuelToAlignCrabs(data);
    const expectedResult = 37;
    expect(result).toBe(expectedResult);
  });
});
