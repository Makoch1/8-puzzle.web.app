import { useState } from "react";
import { Tile } from "./Tile";
import styles from './Board.module.scss'
import { search2D } from "../utils/search2D";
import { isAdjacent } from "../utils/isAdjacent";

type PropTypes = {
  startBoard: number[][],
  isComplete: boolean,
  move: (newBoard: number[][]) => void,
}

export function Board({ startBoard, isComplete, move }: PropTypes) {
  const [board, setBoard] = useState(startBoard);

  const tiles = board.map((row, i) => {
    const rowStyle = `${styles['board-row']} ${isComplete ? styles['board-row-win'] : ''}`
    return (
      <div className={rowStyle} key={i}>
        {row.map((num, j) => <Tile isComplete={isComplete} number={num} updater={createUpdater(i, j)} key={j} />)}
      </div >
    )
  })

  /**
   * Curry. Binds i, j to create an updater function for a specific Tile when it is moved.
   * It is done this way so I won't need to pass in the specific index / position down to each Tile.
   * All Tile needs to do is call updater(), and does not need to be concerned with its position.
   *
   * @param i i-index of the Tile, used for accessing it in the board.
   * @param j j-index of the Tile, used for accessing it in the board.
   * @returns updater function
   */
  function createUpdater(i: number, j: number) {
    /**
     * Responsible for:
     *    a) checking whether a move is valid
     *    b) updating the board 2D array
     *    c) calling move() from parent comp, which updates counter and checks goal state.
     */
    function updater() {
      const newBoard = [...board];

      const zeroIndex = search2D(board, 0); // -- Find [i, j] of blank tile

      if (!isAdjacent(board, i, j, 0)) { // -- is the move valid? is the blank tile beside it?
        return;
      }

      newBoard[zeroIndex[0]][zeroIndex[1]] = board[i][j];
      newBoard[i][j] = 0;

      move(newBoard);
      setBoard(newBoard);
    }

    return updater;
  }

  return (
    <div className={isComplete ? `${styles.board} ${styles['board-win']}` : styles.board}>
      {tiles}
    </div>
  )
}
