const fs = require('fs');
const path = require('path');

function getData(folder, isTest = false) {
  if (!folder) {
    throw new Error('Folder is required to resolve input data.');
  }

  const inputFileName = isTest ? 'input.test.txt' : 'input.txt';

  const data = fs
    .readFileSync(path.resolve(__dirname, folder, inputFileName))
    .toString();

  return data;
}

function getDataInRecords(folder, isTest) {
  const data = getData(folder, isTest);
  const dataArray = data.split('\n').filter((record) => Boolean(record.trim()));

  return dataArray;
}

module.exports = { getData, getDataInRecords };
