import { Link } from '@tanstack/react-router';
import constructionPng from '../assets/construction.png';
import styles from './ComingSoon.module.scss'

export function ComingSoon({ featureName }: { featureName: string }) {
  return (
    <div className={styles['main-container']}>
      <img className={styles['image']} src={constructionPng} />
      <div className={styles['text-container']}>
        <h1 className={styles['text-header']}>
          Coming Soon
        </h1>
        <p className={styles['text-body']}>
          The feature <i>"{featureName}"</i> is still under development.
          Be sure to check back regularly for updates.
          For now, why not challenge yourself with a randomly generated <Link to="/puzzle">puzzle</Link>?
        </p>
      </div>
    </div>
  )
}
