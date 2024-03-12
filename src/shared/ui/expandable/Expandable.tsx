import { FC, PropsWithChildren, ReactNode, useState } from 'react'
// local
import { Icon } from '../icon'
// styles
import styles from './Expandable.module.scss'

export const Expandable: FC<PropsWithChildren<{ title: ReactNode }>> = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <div
      className={`${styles.container} ${collapsed ? styles.collapsed : styles.expanded}`}
      role="region"
      aria-labelledby={'expand'}
      aria-expanded={!collapsed}
    >
      <div
        className={styles.header}
        onClick={async () => { setCollapsed(v => !v) }}
        role="button"
        tabIndex={0}
      >
        <>
          {title}
        </>

        <span className={styles.control}>
          {collapsed ? 'Show' : 'Hide'}
          <Icon name={collapsed ? 'down' : 'up'} />
        </span>
      </div>
      <div className={styles.content} aria-hidden={collapsed}>{children}</div>
    </div>
  )
}
