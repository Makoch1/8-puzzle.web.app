export function createBoardFromID(puzzleID: string): number[][] {
  const board: number[][] = []

  for (let x = 0; x < 3; x++) {
    board[x] = new Array(3)

    for (let y = 0; y < 3; y++) {
      const i = (x * 3) + y
      board[x][y] = Number(puzzleID[i])
    }
  }

  return board
}
