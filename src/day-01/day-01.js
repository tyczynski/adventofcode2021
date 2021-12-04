function getDepthByLargerThanPrevious(records) {
  return records.reduce((summary, record, index) => {
    if (index === 0) return summary;
    return records[index - 1] > record ? summary : summary + 1;
  }, 0);
}

function getDepthByThreeMeasurmentSlidingWindow(records) {
  function isThreeIncreased(index, records) {
    const indexFrom = index;
    const indexTo = indexFrom + 3;
    let first = 0;
    let second = 0;

    for (let i = indexFrom; i <= indexTo; i++) {
      const number = records[i];

      if (i !== indexTo) {
        first += number;
      }

      if (i !== indexFrom) {
        second += number;
      }
    }

    return second > first;
  }

  return records.reduce((acc, _, index) => {
    return isThreeIncreased(index, records) ? acc + 1 : acc;
  }, 0);
}

module.exports = {
  getDepthByLargerThanPrevious,
  getDepthByThreeMeasurmentSlidingWindow,
};
