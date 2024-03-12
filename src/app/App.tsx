import { FC } from "react"
import { TaskPanel } from "src/widgets"
import { RequestClient } from "src/shared/api"
import { AppContainer } from "src/shared/ui"

export const App: FC = () => (
  <AppContainer>
    <RequestClient>
      <TaskPanel />
    </RequestClient>
  </AppContainer>
)