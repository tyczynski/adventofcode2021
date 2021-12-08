const { getData } = require('../utils');
const { getFuelToAlignCrabs, getFuelToAlignCrabsNoEco } = require('./day-07');

const data = getData('day-07');

console.table({
  'Fuel spend to align crabs': getFuelToAlignCrabs(data),
  'Fuel spend to align crabs for non-economical submarines':
    getFuelToAlignCrabsNoEco(data),
});
