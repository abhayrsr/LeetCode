/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const isValidRow = (row) => {
    const set = new Set();
    for (let i = 0; i < 9; i++) {
      if (board[row][i] !== ".") {
        if (set.has(board[row][i])) {
          return false;
        }
        set.add(board[row][i]);
      }
    }
    return true;
  };

  const isValidColumn = (col) => {
    const set = new Set();
    for (let i = 0; i < 9; i++) {
      if (board[i][col] !== ".") {
        if (set.has(board[i][col])) {
          return false;
        }
        set.add(board[i][col]);
      }
    }
    return true;
  };

  const isValidSubGrid = (startRow, startCol) => {
    const set = new Set();
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] !== ".") {
          if (set.has(board[i][j])) {
            return false;
          }
          set.add(board[i][j]);
        }
      }
    }
    return true;
  };

  for (let i = 0; i < 9; i++) {
    if (!isValidRow(i) || !isValidColumn(i)) {
      return false;
    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!isValidSubGrid(i, j)) {
        return false;
      }
    }
  }

  return true;
};