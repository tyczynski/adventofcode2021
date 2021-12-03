const { getData } = require('../utils');
const {
  getPowerConsumptionPart1,
  getPowerConsumptionPart2,
} = require('./powerConsumptionCalculator');

const data = getData('day-03');

console.table({
  'Part 1': getPowerConsumptionPart1(data),
  'Part 2': getPowerConsumptionPart2(data),
});
