import { useState } from "react";
import { Tile } from "./Tile";
import styles from './Board.module.scss'
import { createBoard } from "../utils/createBoard";
import { search2D } from "../utils/search2D";
import { isAdjacent } from "../utils/isAdjacent";
import { isEqualBoard } from "../utils/isEqualBoard";

/* TODO: Change this somehow */
const goalBoard = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0]
];

export function Board({ frozen = false, initialBoard = createBoard() }) {
  const [board, setBoard] = useState(initialBoard);
  const [isGoal, setIsGoal] = useState(false);

  const tiles = board.map((row, i) => {
    return (
      <div className={styles['board-row']} key={i}>
        {row.map((num, j) => <Tile number={num} setter={createSetter(i, j)} key={j} />)}
      </div >
    )
  })

  function createSetter(i: number, j: number) {
    function setter() {
      const newBoard = [...board];

      // -- Find the indexes of zero (the blank tile)
      const zeroIndex = search2D(board, 0);

      // -- Check first if it is a valid move (tile is adjacent to blank tile)
      if (!isAdjacent(board, i, j, 0)) {
        return;
      }

      // -- Swap the number, with the blank space
      newBoard[zeroIndex[0]][zeroIndex[1]] = board[i][j];
      newBoard[i][j] = 0;

      // -- Check if board is equal to goal state
      setIsGoal(isEqualBoard(goalBoard, newBoard));

      setBoard(newBoard);
    }

    return setter;
  }

  return (
    <>
      {tiles}
      {isGoal ? <p>Congrats</p> : <></>}
    </>
  )
}
