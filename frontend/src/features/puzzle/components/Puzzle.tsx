import { useState } from "react";
import { Board } from "./Board";
import styles from './Puzzle.module.scss'
import { isEqualBoard } from "../utils/isEqualBoard";
import { GoalBoard } from "./GoalBoard";
import { createBoardFromID } from "../utils/createBoardFromID";

import copyIcon from '../assets/copy.png'
import restartIcon from '../assets/restart.png'

const goalBoard = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0]
];

type propTypes = {
  puzzleId: string
}

export function Puzzle({ puzzleId }: propTypes) {
  const [moveCount, setMoveCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  function move(newBoard: number[][]): void {
    setMoveCount(moveCount + 1);
    setIsComplete(
      isEqualBoard(newBoard, goalBoard)
    );
  }

  function handleCopy() {
    navigator.clipboard.writeText(location.href)
    setIsCopied(true)
  }

  return (
    <div className={isComplete ? `${styles.main} ${styles['main-win']}` : styles.main}>
      <div>
        <Board
          startBoard={createBoardFromID(puzzleId)}
          isComplete={isComplete}
          move={move} />
        <div className={styles['puzzle-details']}>
          {
            isComplete
              ? <p className={styles.subtext}>Puzzle finished in <span className={styles.counter}>{moveCount}</span> moves.</p>
              : <p className={styles.subtext}><span className={styles.counter}>{moveCount}</span> moves</p>
          }
          {
            !isComplete &&
            <button className={styles['reset-btn']} onClick={() => window.location.reload()}>
              Reset
            </button>
          }
        </div>
        { /* CONTROLS FOR WHEN USER COMPLETES PUZZLE
          /* Not using conditional rendering bc doing so makes the board adjust and jump around
          /* Doing it this way ensures smoothness */}
        <div className={isComplete ? styles['controls'] : styles['controls-hidden']}>
          <button className={styles['controls-button-red']} onClick={() => window.location.reload()}>
            <img src={restartIcon} />
          </button>
          <a href="/puzzle/">
            <button className={styles['controls-button']}>New Puzzle</button>
          </a>
          <button className={isCopied ? styles['controls-button-green'] : styles['controls-button']} onClick={handleCopy}>
            <img src={copyIcon} />
          </button>
        </div>
      </div>
      <GoalBoard board={goalBoard} />
    </div>
  )
}
