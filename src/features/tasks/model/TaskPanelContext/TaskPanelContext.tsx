import { FC, PropsWithChildren, createContext, useEffect, useState } from "react"
// local
import { Task, TaskItemGroup } from "src/entities/tasks"
import { useNotifyError } from "src/shared/hooks/useNotifyError"
import { useGetTasks } from "../../api"
// types
import { TaskPanelContextType } from "./types"

export const TaskPanelContext = createContext<TaskPanelContextType>({
  currentTasks: [],
  setTask: () => { },
  isLoading: false,
  error: '',
})

export const TaskPanelProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTasks, setCurrentTasks] = useState<Array<TaskItemGroup>>([])
  const { notifyError } = useNotifyError()

  const { data, error, isLoading, setTasksStorageValue } = useGetTasks()

  const setTask = (taskGroupName: string, task: Task) => {
    const taskGroup = currentTasks.find(taskGroup => taskGroup.name === taskGroupName)
    if (taskGroup) {
      const tskIx = taskGroup.tasks.findIndex(v => v.id === task.id)
      if (tskIx > -1) {
        taskGroup.tasks[tskIx] = task
      } else {
        taskGroup.tasks.push(task)
      }
      setCurrentTasks([...currentTasks])
      setTasksStorageValue([...currentTasks])
      return
    }
    notifyError('Task group not found')
  }

  useEffect(() => {
    if (data?.length && !error && !isLoading) {
      setCurrentTasks(data)
    }
  }, [data, error, isLoading])

  return (
    <TaskPanelContext.Provider value={{ currentTasks, error, isLoading, setTask }}>
      {children}
    </TaskPanelContext.Provider>
  )
}