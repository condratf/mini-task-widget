import { FC } from 'react'
// local
import { TaskPanelContainer } from 'src/features/tasks/ui'
import { TaskPanelProvider } from 'src/features/tasks/model'

export const TaskPanel: FC = () => {
  return (
    <TaskPanelProvider>
      <TaskPanelContainer
        title='Tasks'
      />
    </TaskPanelProvider>
  )
}