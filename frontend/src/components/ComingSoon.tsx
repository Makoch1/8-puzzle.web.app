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
        <p className={styles['credits']}>
          Illustration by <a href="https://unsplash.com/@momostudioofficial?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">MOMO Studio</a> on <a href="https://unsplash.com/illustrations/a-man-in-a-hard-hat-holding-a-piece-of-paper-G9Txa2BRRbc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </p>
      </div>
    </div>
  )
}
