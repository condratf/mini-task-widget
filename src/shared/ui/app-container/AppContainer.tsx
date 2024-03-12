import { FC, PropsWithChildren } from 'react'

import styles from './AppContainer.module.scss'

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      {children}
    </div>
  )
}
