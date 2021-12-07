const { getData } = require('../utils');
const { getFuelToAlignCrabs } = require('./day-07');

const data = getData('day-07');

console.table({
  'Fuel spend to align crabs': getFuelToAlignCrabs(data),
});
