import { Task, TaskItemGroup } from "src/entities/tasks"

export type TaskPanelContextType = {
  currentTasks: Array<TaskItemGroup>
  setTask: (taskGroupName: string, task: Task) => void
  isLoading: boolean,
  error: string,
}
