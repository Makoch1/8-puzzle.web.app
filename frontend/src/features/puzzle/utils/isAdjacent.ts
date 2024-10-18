/**
 * @param board - 2d array to check
 * @param i - [i][_] index of element to check
 * @param j - [_][j] index of element to check
 * @param adjacentTo - the number that is being checked for adjacency. (is board[i][j] adjacent to adjacentTo)
 * @returns true if adjacent, false otherwise
 */
export function isAdjacent(board: number[][], i: number, j: number, adjacentTo: number): boolean {
  // north
  if (i - 1 >= 0 && board[i - 1][j] == adjacentTo) {
    return true;
  }

  // west
  if (j - 1 >= 0 && board[i][j - 1] == adjacentTo) {
    return true;
  }

  // east
  if (j + 1 < board[i].length && board[i][j + 1] == adjacentTo) {
    return true;
  }

  // south
  if (i + 1 < board.length && board[i + 1][j] == adjacentTo) {
    return true;
  }

  return false;
}
