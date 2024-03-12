import { TaskItemGroup } from "src/entities/tasks"

export function tasksSum(tasks: Array<number>) {
  return tasks.reduce((acc, current) => acc + current, 0)
}
 
export function normalizeTasksAndSum(tasks: Array<number>, total: number) {
  return tasks
    .reduce((acc, taskValue) => acc + (taskValue * 100 / total), 0)
}

export function extractTotalFromTaskGroups(groups: Array<TaskItemGroup>) {
  return groups.reduce(
    (acc, val) => acc.concat(val.tasks.map(task => task.value)),
    [] as Array<number>
  )
}

export function extractCompletedFromTaskGroups(groups: Array<TaskItemGroup>) {
  return groups.reduce(
    (acc, val) => acc.concat(
      val.tasks.filter(task => task.checked).map(task => task.value)
    ),
    [] as Array<number>
  )
}