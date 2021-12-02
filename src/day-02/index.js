const fs = require('fs');
const path = require('path');

function getData() {
  const buffer = fs.readFileSync(path.resolve(__dirname, 'input.txt'));
  const data = buffer.toString();
  const dataArray = data.split('\n').filter(Boolean);

  return dataArray;
}

function getDirection(command) {
  switch (command) {
    case 'forward':
      return 'horizontal';
    case 'up':
    case 'down':
      return 'depth';
    default:
      throw new Error(`Command ${command} is forbidden.`);
  }
}

function parseRecord(record) {
  const [command, rawValue] = record.split(' ');
  const direction = getDirection(command);
  const value = Number(rawValue);
  const realValue = command === 'up' ? value * -1 : value;

  return { direction, command, value: Number(rawValue), realValue };
}

function positionCalculatorV1() {
  const data = getData();

  const { horizontal, depth } = data.reduce(
    (calculations, record) => {
      const { direction, realValue } = parseRecord(record);

      return {
        ...calculations,
        [direction]: calculations[direction] + realValue,
      };
    },
    { horizontal: 0, depth: 0 },
  );

  return horizontal * depth;
}

function positionCalculatorV2() {
  const data = getData();

  const result = data.reduce(
    (calculations, record) => {
      const { command, value, realValue } = parseRecord(record);

      if (command === 'forward') {
        return {
          ...calculations,
          horizontal: calculations.horizontal + value,
          depth: calculations.depth + value * calculations.aim,
        };
      }

      return {
        ...calculations,
        aim: calculations.aim + realValue,
      };
    },
    { horizontal: 0, depth: 0, aim: 0 },
  );

  return result.horizontal * result.depth;
}

console.log({
  V1: positionCalculatorV1(),
  V2: positionCalculatorV2(),
});
