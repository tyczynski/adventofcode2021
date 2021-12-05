const { getDataInRecords } = require('../utils');
const { getOverlappingLines } = require('./day-05');

const records = getDataInRecords('day-05');

console.table({
  'Overlapping lines': getOverlappingLines(records),
});
