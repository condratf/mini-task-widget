import { FC } from 'react'
//local
import { Task, TaskItemGroup } from 'src/entities/tasks'
import { Expandable, Icon } from 'src/shared/ui'
import { TaskItem } from './task-item'
// styles
import styles from './TaskGroup.module.scss'

type TaskGroupProps = {
  group: TaskItemGroup,
  toggleTask: (group: string, task: Task) => void
}

export const TaskGroup: FC<TaskGroupProps> = ({
  group,
  toggleTask
}) => {
  const allCompleted = group.tasks.every((task) => task.checked)

  const groupTitle = (
    <div className={styles.groupTitle}>
      <Icon className='icon' name={allCompleted ? 'bookOk' : 'book'} />
      <span className={allCompleted ? styles.completed : ''}>
        {group.name}
      </span>
    </div>
  )

  return (
    <div className={styles.container}>
      <Expandable title={groupTitle}>
        <div className={styles.group} aria-label='task-group' role="list">
          {group.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={(task: Task) => toggleTask(group.name, task)}
            />
          ))}
        </div>
      </Expandable>
    </div>
  )
}
