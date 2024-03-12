import { FC } from 'react'
// styles
import styles from './ProgressBar.module.scss'

export const ProgressBar: FC<{ completed: number, total: number }> = ({ completed, total }) => {
  return (
    <div className={styles.progressBarContainer} aria-label='progress'>
      <progress id="progress" max={total} value={completed} />
      <label className={styles[`left-${completed.toFixed(0)}`]}>
        {completed.toFixed(0)}%
      </label>
    </div>
  )
}