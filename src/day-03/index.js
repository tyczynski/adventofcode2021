const { getDataInRecords } = require('../utils');
const { getPowerConsumption, getLifeSupportRating } = require('./day-03');

const data = getDataInRecords('day-03');

console.table({
  'Power Consumption': getPowerConsumption(data),
  'Life Support Rating': getLifeSupportRating(data),
});
