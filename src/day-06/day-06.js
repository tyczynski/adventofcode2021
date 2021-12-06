/**
 * @param {string} data
 * @returns
 */
function formatData(data) {
  return data
    .split(',')
    .map(Number)
    .map((number) => ({
      times: number,
      multiplier: 1,
    }));
}

/**
 * @param {string} data
 * @param {number} until
 */
function getLanterfishAmount(data, until) {
  let fishSchool = formatData(data);
  let newSchool = 0;

  for (let i = 0; i < until; i++) {
    for (const fish of fishSchool) {
      if (fish.times === 0) {
        newSchool += fish.multiplier;
      }

      const newTimer = fish.times - 1;
      fish.times = newTimer < 0 ? 6 : newTimer;
    }

    fishSchool.push({ times: 8, multiplier: newSchool });
    newSchool = 0;
  }

  return fishSchool.reduce((acc, fish) => acc + fish.multiplier, 0);
}

module.exports = {
  getLanterfishAmount,
};
