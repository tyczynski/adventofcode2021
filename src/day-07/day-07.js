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

/**
 * @param {string} data
 */
function getFuelToAlignCrabsNoEco(data) {
  const numbers = formatData(data);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const values = [];

  for (let val = min; val <= max; val++) {
    let fuelIndex = 0;

    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      const diff = Math.abs(val - number);

      for (let i = 0; i < diff; i++) {
        fuelIndex += i + 1;
      }
    }

    values.push(fuelIndex);
  }

  return Math.min(...values);
}

module.exports = {
  getFuelToAlignCrabs,
  getFuelToAlignCrabsNoEco,
};
