const { getDataInRecords } = require('../utils');
const {
  getDepthByLargerThanPrevious,
  getDepthByThreeMeasurmentSlidingWindow,
} = require('./day-01');

describe('Day 01 - Sonar Sweep', () => {
  const data = getDataInRecords('day-01', true).map(Number);

  it('should return correct for depth by "larger than previous"', () => {
    const value = getDepthByLargerThanPrevious(data);
    const correctValue = 7;

    expect(value).toBe(correctValue);
  });

  it('should return correct for depth by "three-measurement sliding window" measurment', () => {
    const value = getDepthByThreeMeasurmentSlidingWindow(data);
    const correctValue = 5;

    expect(value).toBe(correctValue);
  });
});
