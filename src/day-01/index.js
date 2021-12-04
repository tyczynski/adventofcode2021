const { getData } = require('../utils');
const {
  getDepthByLargerThanPrevious,
  getDepthByThreeMeasurmentSlidingWindow,
} = require('./day-01');

const data = getData('day-01').map(Number);

console.table({
  'Depth by "larger than previous" measurment':
    getDepthByLargerThanPrevious(data),
  'Depth by "three-measurement sliding window" measurment':
    getDepthByThreeMeasurmentSlidingWindow(data),
});
