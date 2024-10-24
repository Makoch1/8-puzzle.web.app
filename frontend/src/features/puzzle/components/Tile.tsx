import styles from './Tile.module.scss'

type PropTypes = {
  number: number,
  updater: Function,
}

export function Tile({ number, updater }: PropTypes) {
  return (
    <div className={styles.tile} onClick={() => updater()}>
      <p>{number == 0 ? ' ' : number}</p>
    </div>
  )

}
