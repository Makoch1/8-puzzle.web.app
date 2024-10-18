export function createBoard() {
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

  return board;
}
