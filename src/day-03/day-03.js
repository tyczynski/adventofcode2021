function getBits(record) {
  return record.split('').map(Number);
}

function binaryToDecimal(bitsArrayOrValue) {
  const bits = Array.isArray(bitsArrayOrValue)
    ? bitsArrayOrValue.join('')
    : bitsArrayOrValue;

  return Number(`0b${bits}`);
}

function getPowerConsumption(data) {
  const gammaRateBits = data
    .reduce((acc, record) => {
      const bits = getBits(record);

      return bits.map((bit, index) => {
        const accBit = acc[index] || 0;
        const sign = bit > 0 ? 1 : -1;
        return accBit + sign;
      });
    }, [])
    .map((value) => (value > 0 ? 1 : 0));

  const epsilonRateBits = gammaRateBits.map((bit) => bit ^ 1);

  return binaryToDecimal(gammaRateBits) * binaryToDecimal(epsilonRateBits);
}

function getLifeSupportRating(data) {
  function getRating(records, firstBit, secondBit) {
    let clonedRecords = records.slice();
    const recordLength = clonedRecords[0].length;

    while (clonedRecords.length > 1) {
      for (let i = 0; i < recordLength; i++) {
        const counter = clonedRecords.reduce(
          (acc, record) => {
            acc[record[i]]++;
            return acc;
          },
          [0, 0],
        );

        const winner =
          counter[1] > counter[0] || counter[1] === counter[0]
            ? firstBit
            : secondBit;

        clonedRecords = clonedRecords.filter((record) => record[i] == winner);

        if (clonedRecords.length === 1) {
          return clonedRecords[0];
        }
      }
    }

    return clonedRecords;
  }

  const oxygenGeneratorRating = getRating(data, 1, 0);
  const co2ScrubberRating = getRating(data, 0, 1);

  return (
    binaryToDecimal(co2ScrubberRating) * binaryToDecimal(oxygenGeneratorRating)
  );
}

module.exports = { getPowerConsumption, getLifeSupportRating };
