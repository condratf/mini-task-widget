import { FC, ReactNode, useContext } from 'react'
// local
import { TaskGroup } from 'src/features/tasks/ui/task-group'
import { TasksProgressBar } from 'src/features/tasks/ui/task-progress-bar'
import { ErrorView, Loading } from 'src/shared/ui'
import { TaskPanelContext } from '../../model'
// styles
import styles from './TaskPanelContainer.module.scss'

type TaskPanelContainerProps = {
  title: ReactNode
}

export const TaskPanelContainer: FC<TaskPanelContainerProps> = ({ title }) => {
  const { currentTasks, error, isLoading, setTask } = useContext(TaskPanelContext)

  if (error) {
    return <ErrorView errText='error' />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={styles.container} aria-label='task-panel'>
      <div className={styles.topSection} aria-label='task-panel Heading'>
        <h2> {title} </h2>
        <TasksProgressBar totalTasks={currentTasks} />
      </div>

      <div className={styles.taskGroups} aria-label='task-panel groups'>
        {currentTasks?.map((group) => (
          <TaskGroup
            group={group}
            key={group.id}
            toggleTask={setTask}
          />
        ))}
      </div>
    </div>
  )
}
