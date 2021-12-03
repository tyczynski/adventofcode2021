function getBits(record) {
  return record.split('').map(Number);
}

function binaryToDecimal(bitsArray) {
  return Number(`0b${bitsArray.join('')}`);
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
  return 0; // TODO:
}

module.exports = { getPowerConsumption, getLifeSupportRating };
