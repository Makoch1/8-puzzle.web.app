import { useState } from "react";
import { Tile } from "./Tile";
import styles from './Board.module.scss'
import { createBoard } from "../utils/createBoard";

export function Board() {
  const [board, setBoard] = useState(createBoard());

  const tiles = board.map(row => {
    return (
      <div className={styles['board-row']}>
        {row.map(num => <Tile number={num} />)}
      </div >
    )
  })

  // TODO: create setter curried funciton, a state for the zero's index, and a function for searching a 2d array
  function createSetter(x: number, y: number) {
    function setter(num: number) {
      const newBoard = [...board];
    }
  }

  return (
    <>
      {tiles}
    </>
  )
}
