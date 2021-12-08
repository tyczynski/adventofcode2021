const { getData } = require('../utils');
const { getFuelToAlignCrabs, getFuelToAlignCrabsNoEco } = require('./day-07');

describe('Day 7: The Treachery of Whales', () => {
  const data = getData('day-07', true);

  it('should return correct amount of the spend fuel', () => {
    const result = getFuelToAlignCrabs(data);
    const expectedResult = 37;
    expect(result).toBe(expectedResult);
  });

  it('should return correct amount of the spend fuel for more non-economical submarines', () => {
    const result = getFuelToAlignCrabsNoEco(data);
    const expectedResult = 168;
    expect(result).toBe(expectedResult);
  });
});
