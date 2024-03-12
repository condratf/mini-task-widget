export type RawTask = {
  description: string,
  value: number,
  checked: boolean
}

export type RawTaskItemGroup = {
  name: string,
  tasks: RawTask[]
}

export type Task =  RawTask & { id: string }

export type TaskItemGroup = Omit<RawTaskItemGroup, 'tasks'> & {
  id: string, tasks: Task[]
}