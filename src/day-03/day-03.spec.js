const { getData } = require('../utils');
const { getPowerConsumption, getLifeSupportRating } = require('./day-03');

const data = getData('day-03', true);

describe('Day 3 - Power consumption', () => {
  it('should calculate correct power consumption', () => {
    const powerConsumption = getPowerConsumption(data);
    const expectedValue = 198;

    expect(powerConsumption).toBe(expectedValue);
  });

  it('should calculate correct life support rating', () => {
    const lifeSupportRating = getLifeSupportRating(data);
    const expectedValue = 230;

    expect(lifeSupportRating).toBe(expectedValue);
  });
});
