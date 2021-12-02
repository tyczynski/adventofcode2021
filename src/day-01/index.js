const fs = require('fs');
const path = require('path');

// First part

function getMeasurments() {
  const buffer = fs.readFileSync(path.resolve(__dirname, 'input.txt'));
  const data = buffer.toString();
  const dataArray = data.split('\n').map(Number);

  return dataArray;
}

function getIncreasedMeasurments(measurments) {
  const increasedMeasurments = measurments.reduce((acc, curr, index, array) => {
    if (index === 0) return acc;
    const prev = array[index - 1];
    return curr > prev ? acc + 1 : acc;
  }, 0);

  return increasedMeasurments;
}

// Second part

function getIncreasedMeasurmentsByThreeSlidingWindow(measurments) {
  function isThreeIncreased(index, measurments) {
    const indexFrom = index;
    const indexTo = indexFrom + 3;
    let first = 0;
    let second = 0;

    for (let i = indexFrom; i <= indexTo; i++) {
      const number = measurments[i];

      if (i !== indexTo) {
        first += number;
      }

      if (i !== indexFrom) {
        second += number;
      }
    }

    return second > first;
  }

  return measurments.reduce((acc, _, index) => {
    return isThreeIncreased(index, measurments) ? acc + 1 : acc;
  }, 0);
}

// Result

const measurments = getMeasurments();
console.log(getIncreasedMeasurments(measurments));
console.log(getIncreasedMeasurmentsByThreeSlidingWindow(measurments));
