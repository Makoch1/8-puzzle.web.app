import { isSolvable } from "./isSolvable";

/**
 * Creates a randomized 3x3 board. Numbers 1 - 8, plus 0.
 */
export function createBoard(): number[][] {
  const board: number[][] = []

  const numbers = Array.from(Array(9).keys());
  for (let x = 0; x < 3; x++) {
    board[x] = new Array(3)

    for (let y = 0; y < 3; y++) {
      const i = Math.floor(Math.random() * numbers.length);

      board[x][y] = numbers[i];
      numbers.splice(i, 1);
    }
  }

  // check if it is solvable first, if not, recursively call createBoard again
  return isSolvable(board) ? board : createBoard();
}
