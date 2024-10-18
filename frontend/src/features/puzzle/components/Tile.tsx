import styles from './Tile.module.scss'

type PropTypes = {
  number: number,
}

export function Tile({ number }: PropTypes) {
  return (
    <div className={styles.tile}>
      <p>{number == 0 ? ' ' : number}</p>
    </div>
  )

}
