import { useState } from "react";
import { Board } from "./Board";
import styles from './Puzzle.module.scss'
import { isEqualBoard } from "../utils/isEqualBoard";

// TODO: soon, change this to be more dynamic
const goalBoard = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0]
];

export function Puzzle() {
  const [moveCount, setMoveCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  function move(newBoard: number[][]): void {
    setMoveCount(moveCount + 1);
    setIsComplete(
      isEqualBoard(newBoard, goalBoard)
    );
  }

  return (
    <>
      <Board
        isComplete={isComplete}
        move={move} />
      {
        isComplete
          ? <p className={styles.subtext}>Puzzle finished in <span className={styles.counter}>{moveCount}</span> moves.</p>
          : <p className={styles.subtext}>Moves <span className={styles.counter}>{moveCount}</span></p>
      }
    </>
  )
}
