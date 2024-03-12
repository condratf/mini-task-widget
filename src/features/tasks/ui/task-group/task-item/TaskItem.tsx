import { FC } from 'react'
// local
import { Checkbox } from 'src/shared/ui'
// types
import { Task } from 'src/entities/tasks'
// styles
import styles from './TaskItem.module.scss'

type TaskItemProps = {
  task: Task,
  toggleTask?: (task: Task) => void
}

export const TaskItem: FC<TaskItemProps> = ({
  task, toggleTask
}) => {
  return (
    <div
      className={styles.container}
      onClick={() => toggleTask?.({ ...task, checked: !task.checked })}
      aria-label='task-item'
      role='listitem'
    >
      <Checkbox checked={task.checked} />
      <span>{task.description}</span>
    </div>
  )
}
