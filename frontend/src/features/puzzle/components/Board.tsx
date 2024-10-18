import { useState } from "react";
import { Tile } from "./Tile";
import styles from './Board.module.scss'
import { createBoard } from "../utils/createBoard";
import { search2D } from "../utils/search2D";
import { isAdjacent } from "../utils/isAdjacent";

export function Board() {
  const [board, setBoard] = useState(createBoard());

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

      // find the indexes of zero (the blank tile)
      const zeroIndex = search2D(board, 0);

      // check first if it is a valid move (tile is adjacent to blank tile)
      if (!isAdjacent(board, i, j, 0)) {
        return;
      }

      // swap the number, with the blank space
      newBoard[zeroIndex[0]][zeroIndex[1]] = board[i][j];
      newBoard[i][j] = 0;

      setBoard(newBoard);
    }

    return setter;
  }

  return (
    <>
      {tiles}
    </>
  )
}
