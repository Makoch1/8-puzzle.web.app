import styles from './GoalBoard.module.scss'

type PropTypes = {
  board: number[][]
}

export function GoalBoard({ board }: PropTypes) {
  const tiles = board.map(row =>
    <div className={styles.row}>
      {row.map(num =>
        <div className={styles.tile}>
          <p>{num !== 0 ? num : ''}</p>
        </div>
      )}
    </div>
  )

  return (
    <div className={styles.main}>
      <p className={styles.title}>Goal State</p>
      {tiles}
    </div>
  )
}

