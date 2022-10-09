import { boardCols, boardRows } from "const";

/*
Get the diagonal from the top left to the bottom right of the board.

Args:
  board: the board we're checking
  row: the row of the current cell
  col: the column of the current cell
Returns:
  An array of numbers.
*/
export const getDiagonalLeftToRight = (board: number[][], row: number, col: number) => {
  const diagonal = [];
  let initialCol = col - row;
  let initialRow = 0;
  for(let i = initialCol; i < boardCols; i++) {
    if(i < 0) {
      initialRow++;
      continue;
    }
    if(initialRow >= boardRows) break;
    diagonal.push(board[i][initialRow] || 0);
    initialRow++;
  }

  return diagonal;
};

/*
Given a board and a row and column, return the diagonal of the board from the top left to the bottom right.

Args:
  board: the board we're checking
  row: the row of the current cell
  col: the column of the current cell
Returns:
  An array of numbers.
*/
export const getDiagonalRightToLeft = (board: number[][], row: number, col: number) => {
  const diagonal = [];
  let initialCol = col + row;
  let initialRow = 0;
  for(let i = initialCol; i >= 0; i--) {
    if(i >= boardCols) {
      initialRow++;
      continue;
    }
    if(initialRow >= boardRows) break;
    diagonal.push(board[i][initialRow] || 0);
    initialRow++;
  }

  return diagonal;
}

export const testWin = (arr: number[]): boolean => /1{4}|2{4}/.test(arr.join(""));

export const isWin = (board: number[][], row: number, col: number) => {
  const vertical = board[col];
  const horizontal = board.map((col) => col[row] || 0);
  const diagonalLeftToRight = getDiagonalLeftToRight(board, row, col);
  const diagonalRightToLeft = getDiagonalRightToLeft(board, row, col);
  
  return testWin(vertical) || // did win vertically
   testWin(horizontal) || // did win horizontally
   testWin(diagonalLeftToRight) || testWin(diagonalRightToLeft); // did win diagonally
}
