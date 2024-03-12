import { RawTask, Task, RawTaskItemGroup, TaskItemGroup} from "src/entities/tasks";

export function toTaskMapper(rawTask: RawTask): Task {
  return {
    ...rawTask,
    id: `${rawTask.description}-${(Math.random()*10).toFixed(3)}`,
  }
}

export function toTaskGroupMapper(taskGroup: RawTaskItemGroup): TaskItemGroup {
  return {
    ...taskGroup,
    tasks: taskGroup.tasks.map(toTaskMapper),
    id: `${taskGroup.name}-${(Math.random()*10).toFixed(3)}`,
  }
}