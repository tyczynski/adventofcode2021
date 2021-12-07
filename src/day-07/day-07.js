/**
 * @param {string} data
 * @returns
 */
function formatData(data) {
  return data.split(',').map(Number);
}

/**
 * @param {string} data
 */
function getFuelToAlignCrabs(data) {
  const numbers = formatData(data).sort((a, b) => a - b);
  const middle = numbers[Math.round(numbers.length / 2)];
  const fuel = numbers.reduce((acc, val) => acc + Math.abs(val - middle), 0);

  return fuel;
}

module.exports = {
  getFuelToAlignCrabs,
};
