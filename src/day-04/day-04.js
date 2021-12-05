function parseBingoData(data) {
  const winningNumbers = data[0].split(',').map(Number);
  const boards = [];
  let currentBoard = 0;

  data.forEach((row, index) => {
    if (index === 0) return;
    const rowString = row.trim();

    if (rowString.length > 0) {
      const rowNumbers = rowString.split(' ').filter(Boolean).map(Number);

      boards[currentBoard] === undefined
        ? boards.push([rowNumbers])
        : boards[currentBoard].push(rowNumbers);

      if (boards[currentBoard].length === 5) {
        currentBoard++;
      }
    }
  });

  return { winningNumbers, boards };
}

function calcScore(stats, board, goldNumber) {
  const unmark = board.reduce((acc, row) => {
    row.forEach((item) =>
      !stats.winningNumbers.includes(item) ? (acc += item) : null,
    );

    return acc;
  }, 0);

  return unmark * goldNumber;
}

function bingoWinner(data) {
  function findBoard(data) {
    const { boards, winningNumbers } = parseBingoData(data);
    const skipBoard = [];
    const winningBoards = [];
    const scores = {};

    for (
      let winningNumberIndex = 0;
      winningNumberIndex < winningNumbers.length;
      winningNumberIndex++
    ) {
      const winningNumber = winningNumbers[winningNumberIndex];

      for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
        const board = boards[boardIndex];

        if (skipBoard.includes(boardIndex)) {
          continue;
        }

        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
          const row = board[rowIndex];

          for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
            const cell = row[cellIndex];

            if (cell === winningNumber) {
              if (!scores[boardIndex]) {
                scores[boardIndex] = {
                  winningNumbers: [],
                  row: {},
                  col: {},
                };
              }

              scores[boardIndex].winningNumbers.push(winningNumber);
              scores[boardIndex].row[rowIndex] =
                (scores[boardIndex].row[rowIndex] || 0) + 1;
              scores[boardIndex].col[cellIndex] =
                (scores[boardIndex].col[cellIndex] || 0) + 1;

              const rowWon = scores[boardIndex].row[rowIndex] === 5;
              const colWon = scores[boardIndex].col[cellIndex] === 5;

              if (rowWon || colWon) {
                skipBoard.push(boardIndex);
                winningBoards.push([
                  scores[boardIndex],
                  boards[boardIndex],
                  cell,
                ]);
              }
            }
          }
        }
      }
    }

    return [winningBoards[0], winningBoards[winningBoards.length - 1]];
  }

  const [first, last] = findBoard(data);

  const firstScore = calcScore(...first);
  const lastScore = calcScore(...last);

  return { firstScore, lastScore };
}

module.exports = {
  bingoWinner,
};
