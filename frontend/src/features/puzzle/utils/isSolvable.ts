/**
 * Checks 8 puzzle board if it is solvable using number of inversions.
 * Lay out the board in a 1d sequence. For each number, count the amount of 
 * numbers lower than it (i.e. count how many are out of order). That is the amount of inversions.
 * https://www.geeksforgeeks.org/check-instance-8-puzzle-solvable/ for more info.
 *
 * @param board 2D 8-puzzle array
 * @returns true if solvable, false otherwise
 */
export function isSolvable(board: number[][]): boolean {
  let inversions = 0;

  /**
   * Converts 1D index to a 2D [row, col] index pair.
   * Extracts the element from the board using the index pair.
   *
   * @param index 1D index
   * @returns element
   */
  function extractElement(index: number) {
    const row = Math.floor(index / board.length);
    const col = index % board.length;

    return board[row][col];
  }

  const totalLength = board.length * board.length;
  for (let i = 0; i < totalLength; i++) {
    const curr = extractElement(i);

    for (let j = i + 1; j < totalLength; j++) {
      const toCheck = extractElement(j);

      if (curr != 0 && toCheck != 0 && curr > toCheck) {
        inversions++;
      }
    }
  }

  // if the inversions are even, it is considered to be solvable.
  return inversions % 2 == 0;
}

