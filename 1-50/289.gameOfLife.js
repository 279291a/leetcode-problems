/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const getNeibourhood = (arr, i, j) => {
  const result = [];
  const isFirstColumn = j == 0;
  const isLastColumn = j === arr[i].length - 1;

  if (i !== 0) {
    result.push(arr[i - 1][j]);

    !isFirstColumn && result.push(arr[i - 1][j - 1]);
    !isLastColumn && result.push(arr[i - 1][j + 1]);
  }

  if (i !== arr.length - 1) {
    result.push(arr[i + 1][j]);

    !isFirstColumn && result.push(arr[i + 1][j - 1]);
    !isLastColumn && result.push(arr[i + 1][j + 1]);
  }

  !isFirstColumn && result.push(arr[i][j - 1]);
  !isLastColumn && result.push(arr[i][j + 1]);

  return result.reduce((pre, cur) => pre + cur, 0);
};

const getNewCell = (arr, i, j) => {
  const lives = getNeibourhood(arr, i, j);
  console.log(i, j, ":", arr[i][j], "---->", lives);
  if (arr[i][j] === 1) {
    switch (lives) {
      case 3:
      case 2:
        return 1;
      default:
        return 0;
    }
  } else {
    switch (lives) {
      case 3:
        return 1;

      default:
        return 0;
    }
  }
};

var gameOfLife = function(board) {
  const arr = board.map(v => [...v]);
  if (board.length === 0 || board[0].length === 0) return;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = getNewCell(arr, i, j);
    }
  }

  // return result;
};
