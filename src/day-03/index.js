const { getData } = require('../utils');
const { getPowerConsumption, getLifeSupportRating } = require('./day-03');

const data = getData('day-03');

console.table({
  'Power Consumption': getPowerConsumption(data),
  'Life Support Rating': getLifeSupportRating(data),
});
