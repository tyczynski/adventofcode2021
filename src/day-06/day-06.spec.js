const { getData } = require('../utils');
const { getLanterfishAmount } = require('./day-06');

describe('Day 6: Lanternfish', () => {
  const data = getData('day-06', true);

  it.each([
    [80, 5934],
    // [256, 26984457539],
  ])(
    'should return correct amount of the Lanterfish after %i days',
    (days, total) => {
      const result = getLanterfishAmount(data, days);
      expect(result).toBe(total);
    },
  );
});
