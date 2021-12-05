/**
 * @param {string[]} records
 * @returns {number[][][]}
 */
function parseRecords(records) {
  return records.map((record) =>
    record
      .split(' -> ')
      .map((pair) => pair.split(',').map((val) => Number.parseInt(val, 10))),
  );
}

function sortKeys(keys) {
  return [...keys].sort((a, b) => a - b);
}

/**
 * @param {string[]} records
 * @returns {number}
 */
function getOverlappingLines(records) {
  const coordinates = parseRecords(records);
  let entries = [];

  for (const coordinate of coordinates) {
    const [[x1, y1], [x2, y2]] = coordinate;

    if (y1 === y2) {
      const [first, last] = sortKeys([x1, x2]);

      for (let i = first; i <= last; i++) {
        entries.push(`${i}-${y1}`);
      }
    }

    if (x1 === x2) {
      const [first, last] = sortKeys([y1, y2]);

      for (let i = first; i <= last; i++) {
        entries.push(`${x1}-${i}`);
      }
    }
  }

  const summary = entries.reduce((acc, entry) => {
    if (!acc[entry]) acc[entry] = 0;
    acc[entry]++;
    return acc;
  }, {});

  return Object.values(summary).filter((val) => val > 1).length;
}

module.exports = {
  getOverlappingLines,
};
