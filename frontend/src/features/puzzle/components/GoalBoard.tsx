import { useState } from 'react'
import collapseIcon from '../assets/collapse.png'
import expandIcon from '../assets/expand.png'
import styles from './GoalBoard.module.scss'

type PropTypes = {
  board: number[][]
}

/*
 * The reason this is needed, instead of using container, and container-expanded is:
 * If i don't separate the closing animation to container-collapsed, and simply place it in container,
 * the animation plays on load.
 * */
enum ContainerClass {
  BASE = 'container',
  EXPANDED = 'container-expanded',
  COLLAPSED = 'container-collapsed'
}

export function GoalBoard({ board }: PropTypes) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [containerClass, setContainerClass] = useState<ContainerClass>(ContainerClass.BASE)

  const tiles = board.map(row =>
    <div className={styles['board-row']}>
      {row.map(num =>
        <div className={styles['board-tile']}>
          <p>{num !== 0 ? num : ''}</p>
        </div>
      )}
    </div>
  )

  // change the container class name + setIsExpanded to opposite
  function handleExpand() {
    isExpanded
      ? setContainerClass(ContainerClass.COLLAPSED)
      : setContainerClass(ContainerClass.EXPANDED)

    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div className={styles[containerClass]}>
        <div className={styles['board']}>
          <p className={styles['board-title']}>Goal State</p>
          {tiles}
        </div>
      </div>
      <button
        className={styles['container-expand-btn']}
        onClick={handleExpand}>
        <img src={isExpanded ? collapseIcon : expandIcon} />
      </button>
    </>
  )
}

