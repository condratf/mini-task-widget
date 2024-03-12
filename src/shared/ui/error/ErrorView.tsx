import {FC} from 'react'
// styles
import styles from './ErrorView.module.scss'

export const ErrorView: FC<{errText?: string}> = ({errText}) => {
  return (
    <div className={styles.errContainer} aria-label='error' aria-description={errText}>
      <h2>Sorry, something went wrong</h2>
      <p>{errText}</p>
    </div>
  )
}
