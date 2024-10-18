import styles from './Tile.module.scss'

type PropTypes = {
  number: number,
  setter: Function,
}

export function Tile({ number, setter }: PropTypes) {
  return (
    <div className={styles.tile} onClick={() => setter()}>
      <p>{number == 0 ? ' ' : number}</p>
    </div>
  )

}
