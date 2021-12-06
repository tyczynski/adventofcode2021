/**
 * @param {boolean} newborn
 * @param {number|undefined} timer
 */
function createFish(newborn, timer) {
  return {
    newborn,
    timer: timer ? timer : newborn ? 8 : 6,
  };
}

/**
 * @param {string} data
 * @returns
 */
function formatData(data) {
  return data.split(',').map((number) => createFish(false, number));
}

/**
 * @param {string} data
 * @param {number} until
 */
function getLanterfishAmount(data, until) {
  let fishSchool = formatData(data);
  let newbornSchool = [];
  let currentDay = 0;
  const untilDay = until;

  while (currentDay < untilDay) {
    for (const fish of fishSchool) {
      if (fish.timer === 0) {
        newbornSchool.push(createFish(true));
      }

      const newTimer = fish.timer - 1;
      fish.timer = newTimer < 0 ? 6 : newTimer;
    }

    fishSchool = fishSchool.concat(newbornSchool);
    newbornSchool = [];

    currentDay++;
  }

  return fishSchool.length;
}

module.exports = {
  getLanterfishAmount,
};
