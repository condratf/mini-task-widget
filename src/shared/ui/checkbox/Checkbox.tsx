import { FC } from 'react'
// assets
import check from './assets/check.svg'
import uncheck from './assets/uncheck.svg'
// styles
import styles from './Checkbox.module.scss'

type CheckboxProps = {
  checked: boolean,
  label?: string,
} & React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox: FC<CheckboxProps> = ({ checked, label, ...props }) => {
  return (
    <div className={styles.container}>
      <label className={styles.checkbox}>
        {label && label}
        <input
          type="checkbox"
          defaultChecked={checked}
          checked={props.onChange ? checked : undefined}
          {...props}
        />
        <img
          src={checked ? check : uncheck} alt="checks"
          onClick={(e) => e.preventDefault()}
        />
      </label>
    </div>
  )
}
