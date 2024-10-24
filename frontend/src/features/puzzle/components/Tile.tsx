import styles from './Tile.module.scss'

type PropTypes = {
  isComplete: boolean,
  number: number,
  updater: Function,
}

export function Tile({ isComplete, number, updater }: PropTypes) {
  const style = `${styles.tile} ${isComplete ? styles['tile-win'] : ''}`;

  function handleClick() {
    if (!isComplete) {
      updater();
    }
  }

  return (
    <div className={style} onClick={() => handleClick()}>
      <p>{number == 0 ? ' ' : number}</p>
    </div>
  )

}
