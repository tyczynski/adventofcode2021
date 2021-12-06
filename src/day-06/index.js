const { getData } = require('../utils');
const { getLanterfishAmount } = require('./day-06');

const data = getData('day-06');

console.table({
  'Lanterfish after 80 days': getLanterfishAmount(data, 80),
  'Lanterfish after 256 days': getLanterfishAmount(data, 256),
});
