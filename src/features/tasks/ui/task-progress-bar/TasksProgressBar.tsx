import { FC } from 'react'
import { TaskItemGroup } from 'src/entities/tasks'
import { ProgressBar } from 'src/shared/ui'
import {
  extractCompletedFromTaskGroups,
  extractTotalFromTaskGroups,
  normalizeTasksAndSum,
  tasksSum
} from 'src/shared/utils/tasks'

export const TasksProgressBar: FC<{ totalTasks: Array<TaskItemGroup> }> = ({ totalTasks }) => {
  const total = extractTotalFromTaskGroups(totalTasks)
  const completed = extractCompletedFromTaskGroups(totalTasks)

  return (
    <ProgressBar
      completed={normalizeTasksAndSum(completed, tasksSum(total))}
      total={100}
    />
  )
}
