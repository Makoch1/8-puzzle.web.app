import { useState } from "react";
import { Board } from "./Board";
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
        move={move} />
      <p>{moveCount}</p>
      <p>{isComplete ? "Congrats" : ""}</p>
    </>
  )
}
