const { getData } = require('../utils');
const {
  getPowerConsumptionPart1,
  getPowerConsumptionPart2,
} = require('./powerConsumptionCalculator');

const data = getData('day-03', true);

describe('Day 3 - Power consumption', () => {
  it('should calculate correct power consumption for part 1 of task', () => {
    const powerConsumption = getPowerConsumptionPart1(data);
    const expectedValue = 198;

    expect(powerConsumption).toBe(expectedValue);
  });

  it('should calculate correct power consumption for part 2 of task', () => {
    const powerConsumption = getPowerConsumptionPart2(data);
    const expectedValue = 230;

    expect(powerConsumption).toBe(expectedValue);
  });
});
